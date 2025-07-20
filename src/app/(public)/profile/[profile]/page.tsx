"use client";
import { useParams } from "next/navigation";

type ProfileParams = {
  profile: string;
};
const Profile = () => {
  const { profile } = useParams<ProfileParams>();
  return (
    <main>
      <p>Profile: {profile}</p>
    </main>
  );
};

export default Profile;
