import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
export async function generateMetadata({
  params,
}: {
  params: { profile: string };
}) {
  return {
    title: `@${params.profile}`,
    description: `This is @${params.profile}'s profile.`,
  };
}
export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
