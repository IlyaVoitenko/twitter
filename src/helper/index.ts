import { months } from "./constants";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export const getMonthName = (index: number) => {
  return months[index];
};
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month}. ${year} y.`;
};

export const IsSignedIn = () => {
  const { data: session } = useSession();
  console.log("Session:", session);
  if (!session) {
    redirect("/auth/signin");
  }
};
