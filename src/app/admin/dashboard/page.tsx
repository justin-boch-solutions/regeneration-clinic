import DashboardClient from "../../../components/DashboardClient";
import prisma from "../../../lib/prisma";

export default async function AdminDashboard() {
  // Fetch initial data securely from server
  const appointments = await prisma.appointment.findMany({ orderBy: { createdAt: "desc" } });
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <DashboardClient appointments={appointments} initialPosts={posts} />
    </>
  );
}
