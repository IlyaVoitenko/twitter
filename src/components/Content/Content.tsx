import Navigation from "@/components/Navigation";
import { PropsWithChildren } from "react";
import styles from "./Content.module.scss";
const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default Content;
