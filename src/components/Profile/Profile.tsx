"use client";
import { useParams } from "next/navigation";

type ProfileParams = {
  profile: string;
};

const Profile = () => {
  const { profile } = useParams<ProfileParams>();
  return (
    <div>
      <p>Profile: {profile}</p>
    </div>
  );
};

export default Profile;
