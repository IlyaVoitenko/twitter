import { Metadata } from "next";
import { ITweet } from "../../shared/interfaces.types";
import Link from "next/link";
import { PAGES } from "../../config/pages.config";
import Image from "next/image";
import styles from "./Tweet.module.scss";
import { formatDate } from "../../helper";
import verifiedIcon from "../../assets/verified.svg"; // Assuming you have a verified icon in your public folder

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
  const dateAdded = formatDate(tweet.dateAdded);
  return (
    <div className={styles.container}>
      <Image src={"/logo.svg"} alt="Logo" width={25} height={25} />
      <div className={styles.content}>
        <div className={styles.nameAndAccount}>
          <Link
            className={styles.linkNameUser}
            href={PAGES.PROFILE(tweet.userName)}
          >
            {tweet.userName}{" "}
            <Image
              src={verifiedIcon}
              width={15}
              height={15}
              alt="account verified"
            />
          </Link>
          <Link
            className={styles.linkTweeterAccountName}
            href={PAGES.PROFILE(tweet.userName)}
          >
            @{tweet.userName}
          </Link>
          <span className={styles.dateAdded}>&middot; {dateAdded}</span>
        </div>

        <br />
        <span>{tweet.message}</span>
      </div>
    </div>
  );
};
export default Tweet;
