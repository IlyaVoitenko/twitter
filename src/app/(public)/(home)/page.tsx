import { tweets } from "../../../shared/tweets.data.json";
export default function Home() {
  return (
    <main>
      {tweets &&
        tweets.map((tweet) => <p key={tweet.tweetId}>{tweet?.message}</p>)}
    </main>
  );
}
