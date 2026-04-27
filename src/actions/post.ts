"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const lang = (formData.get("lang") as string) || "de";

    if (!title || !content) {
      return { success: false, error: "Title and content are required" };
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        lang,
      },
    });

    revalidatePath("/[lang]/news", "page");
    revalidatePath("/admin/dashboard");

    return { success: true, data: post };
  } catch (error) {
    console.error("Failed to create post:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({ where: { id } });
    revalidatePath("/[lang]/news", "page");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function getPosts(lang?: string) {
  try {
    const filter = lang ? { lang, published: true } : {};
    const posts = await prisma.post.findMany({
      where: filter,
      orderBy: { createdAt: "desc" },
    });
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}
