import { Metadata } from "next";
import { ITweet } from "../../shared/types";

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
        By: {tweet.userName} : {tweet.userId}
      </span>
      <br />
      <span>{tweet.message}</span>
    </div>
  );
};

export default Tweet;
