import Tweet from "./Tweet";
import { tweets } from "../../../shared/tweets.data.json";
import { useSession } from "next-auth/react";

export function TweetsUserPage() {
  return (
    <main>
      {tweets &&
        tweets.map((tweet) => <Tweet key={tweet.tweetId} tweet={tweet} />)}
    </main>
  );
}

export default TweetsUserPage;
