import { Metadata } from "next";
import { ITweet } from "../../../shared/interfaces.types";
import Link from "next/link";
import { PAGES } from "../../../config/pages.config";
import Image from "next/image";

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
      <Image src={"/xlogo.svg"} alt="Logo" width={50} height={50} />
      <span>
        <Link href={PAGES.PROFILE(tweet.userName)}>@{tweet.userName}</Link>
      </span>
      <br />
      <span>{tweet.message}</span>
    </div>
  );
};

export default Tweet;
