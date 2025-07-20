import Profile from "@/components/Profile";
import { Metadata } from "next";

type ProfileParams = {
  params: { profile: string };
};
export const generateMetadata = async ({
  params,
}: ProfileParams): Promise<Metadata> => {
  const { profile } = params;
  return {
    title: `@${profile}`,
  };
};

const ProfilePage = () => {
  return (
    <main>
      <Profile />
    </main>
  );
};

export default ProfilePage;
