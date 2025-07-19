import { Metadata } from "next";
import { ITweet } from "../../../shared/interfaces.types";
import Link from "next/link";
import { PAGES } from "../../../config/pages.config";

export const metadata: Metadata = {
  title: {
    default: "Single Tweet",
    template: "%s | Single Tweet",
  },
  description: "A single tweet component",
};

interface TweetProps {
  tweet: ITweet;
}
const Tweet = ({ tweet }: TweetProps) => {
  return (
    <div>
      <span>
        <Link href={PAGES.PROFILE(tweet.userName)}>
          By: {tweet.userName} : {tweet.userId}
        </Link>
      </span>
      <br />
      <span>{tweet.message}</span>
    </div>
  );
};

export default Tweet;
