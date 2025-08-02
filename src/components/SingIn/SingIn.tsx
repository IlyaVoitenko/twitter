import styles from "./SingIn.module.scss";
import xAuth from "../../assets/xAuth.svg";
import Image from "next/image";
import { Session } from "../../shared/interfaces.types";
import SignInProvider from "../SignInProvider";

interface ProfileProps {
  session: Session | null;
}

const SingIn = ({ session }: ProfileProps) => {
  const { user } = session || {};

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={xAuth} alt="" width={450} height={450} />
      </div>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Welcome to X</h1>
        <h3 className={styles.subtitle}>Please sign in to continue</h3>
        <SignInProvider user={user} typeBtn="google" />
        <SignInProvider user={user} typeBtn="apple" />
        <div className={styles.divider}>
          <hr className={styles.dividerLine} />
          <span>&nbsp;&nbsp;OR&nbsp;&nbsp;</span>
          <hr className={styles.dividerLine} />
        </div>
        <button className={`${styles.buttonAuth} ${styles.buttonAuthSignUp}`}>
          <span className={`${styles.textAuth} ${styles.textAuthSignUp}`}>
            Sign up
          </span>
        </button>
        <p className={styles.textHaveAccount}>Already have an account?</p>
        <button className={`${styles.buttonAuth} ${styles.buttonAuthSignIn}`}>
          <span className={`${styles.textAuth} ${styles.textAuthSignIn}`}>
            {" "}
            Sign in{" "}
          </span>
        </button>
      </div>
    </main>
  );
};

export default SingIn;
