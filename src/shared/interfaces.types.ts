import { DefaultSession } from "next-auth";
import mongoose from "mongoose";

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
export interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}
export interface ITwitterUser extends Document {
  name: string;
  email: string;
  username: string;
  image?: string;
  bio?: string;
  website?: string;
  createdAt: Date;
  isVerified: boolean;
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  tweets: mongoose.Types.ObjectId[];
  provider?: string;
}
export interface ITweet {
  content: string;
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  likes: mongoose.Types.ObjectId[];
  replies: mongoose.Types.ObjectId[];
  retweetFrom?: mongoose.Types.ObjectId;
  images?: { url: string; public_id?: string }[];
  isDeleted: boolean;
  views: number;
  isPinned: boolean;
  hashtags: string[];
  mentions: mongoose.Types.ObjectId[];
}
