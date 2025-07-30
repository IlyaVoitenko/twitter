import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import Profile from "@/components/SingIn";

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

  return <div></div>;
}
