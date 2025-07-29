import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import Image from "next/image";

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
      <Image
        src={session?.user?.image || "/logo.svg"}
        alt={`${session?.user?.name}'s profile picture`}
        width={20}
        height={20}
      />
    </div>
  );
}
