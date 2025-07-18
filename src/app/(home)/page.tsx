import Tweet from "./Tweet";
import { tweets } from "../shared/data.json";
export default function Home() {
  return (
    <>
      {tweets &&
        tweets.map((tweet) => <Tweet key={tweet.tweetId} tweet={tweet} />)}
    </>
  );
}
