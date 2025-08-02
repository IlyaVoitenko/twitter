import React from "react";
import SingIn from "@/components/SingIn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const Auth = async () => {
  const session = await getServerSession(authOptions);

  return <SingIn session={session} />;
};

export default Auth;
