"use server";

import prisma from "../lib/prisma";

export async function bookAppointment(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      department: formData.get("department") as string,
      datePreference: (formData.get("datePreference") as string) || null,
      message: (formData.get("message") as string) || null,
    };

    // Very basic validation
    if (!rawData.name || !rawData.email || !rawData.department) {
      return { success: false, error: "Missing required fields" };
    }

    const appointment = await prisma.appointment.create({
      data: rawData,
    });

    return { success: true, data: appointment };
  } catch (error) {
    console.error("Failed to book appointment:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
