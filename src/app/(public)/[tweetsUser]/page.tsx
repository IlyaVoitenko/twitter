import Tweet from "../../../components/Tweet";
import { tweets } from "../../../shared/tweets.data.json";

export function TweetsUserPage() {
  return (
    <main>
      {tweets &&
        tweets.map((tweet) => <Tweet key={tweet.tweetId} tweet={tweet} />)}
    </main>
  );
}

export default TweetsUserPage;
