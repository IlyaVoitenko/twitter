import { ITwitterUser } from "../shared/interfaces.types";
import { Schema, models, model } from "mongoose";

export const twitterUserSchema = new Schema<ITwitterUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  username: { type: String, unique: true, required: true },
  image: { type: String },
  bio: { type: String, default: "" },
  website: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  provider: { type: String },
});
export const TwitterUser =
  models.TwitterUser || model<ITwitterUser>("TwitterUser", twitterUserSchema);
