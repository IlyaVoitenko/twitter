import { DefaultSession } from "next-auth";
export interface ITweet {
  tweetId: string | number;
  message: string;
  userName: string;
  tweetAccountName: string;
  userId: string;
  dateAdded: string;
  likes: number;
  reposts: number;
  comments: number;
  statistics: number;
  isSaved: boolean;
}
export type NavItemType = {
  path: string;
  label: string;
  icon?: string;
};
export type ProfileParams = {
  params: { profile: string };
};
export interface ProfileType {
  profile: string;
}
export interface Session extends DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    provider?: string;
  };
}
