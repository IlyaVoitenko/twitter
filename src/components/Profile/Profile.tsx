"use client";
import { useParams } from "next/navigation";

type ProfileParams = {
  profile: string;
};

const Profile = () => {
  const { profile } = useParams<ProfileParams>();
  console.log("profile:", profile);
  return (
    <div>
      <p>Profile: {profile}</p>
    </div>
  );
};

export default Profile;
