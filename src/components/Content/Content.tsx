"use client";
import Navigation from "@/components/Navigation";
import { PropsWithChildren } from "react";
import styles from "./Content.module.scss";
import { usePathname } from "next/navigation";
const Content = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/auth");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!isAuthPage && <Navigation />}
        {children}
      </main>
    </div>
  );
};

export default Content;
