import Explore from "@/components/Explore";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore new content and trends",
};

const ExplorePage = () => {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
};

export default ExplorePage;
