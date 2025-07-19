"use client";
import { useSearchParams } from "next/navigation";
const Explore = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <div>
      <h1>Explore Page</h1>
      <p>Discover new content and trends here!</p>
      {tag && <p>Search results for: {tag}</p>}
    </div>
  );
};

export default Explore;
