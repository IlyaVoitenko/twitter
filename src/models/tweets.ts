import { ITweet } from "../shared/interfaces.types";
import { Schema, models, model } from "mongoose";

export const tweetSchema = new Schema<ITweet>(
  {
    content: {
      type: String,
      required: true,
      maxlength: 280,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "TwitterUser",
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "TwitterUser",
      },
    ],
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
    retweetFrom: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
      default: null,
    },
    images: [
      {
        url: { type: String },
        public_id: String,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    hashtags: [
      {
        type: String,
      },
    ],
    mentions: [
      {
        type: Schema.Types.ObjectId,
        ref: "TwitterUser",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export const Tweet = models.Tweet || model<ITweet>("Tweet", tweetSchema);
