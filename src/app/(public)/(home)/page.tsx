import Tweet from "./Tweet";
import { tweets } from "../../../shared/tweets.data.json";
export default function Home() {
  return (
    <main>
      {tweets &&
        tweets.map((tweet) => <Tweet key={tweet.tweetId} tweet={tweet} />)}
    </main>
  );
}
