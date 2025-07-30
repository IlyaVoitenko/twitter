import styles from "./SingIn.module.scss";
import appleLogo from "../../assets/apple-inc.svg";
import googleLogo from "../../assets/google.svg";
import xAuth from "../../assets/xAuth.svg";
import arrowDown from "../../assets/ArrowBlackDown.svg";
import Image from "next/image";
import { Session } from "../../shared/interfaces.types";

interface ProfileProps {
  session: Session | null;
}

const SingIn = ({ session }: ProfileProps) => {
  const { user } = session || {};
  console.log(user);
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    console.log("Not Signed in");
  }

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={xAuth} alt="" width={450} height={450} />
      </div>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Welcome to X</h1>
        <h3 className={styles.subtitle}>Please sign in to continue</h3>
        {user && user?.provider === "google" ? (
          <button className={styles.buttonAuth}>
            <Image
              src={user.image || googleLogo}
              className={styles.logo}
              alt="Google Logo"
              width={20}
              height={20}
            />
            <div>
              <span>signing in as {user?.name}</span>
              <span>
                {user.email}
                <Image src={arrowDown} alt="" width={18} height={18} />
              </span>
            </div>
          </button>
        ) : (
          <button className={styles.buttonAuth}>
            <Image
              src={googleLogo}
              className={styles.logo}
              alt="Google Logo"
              width={20}
              height={20}
            />
            <span className={styles.textAuth}> Sign up with Google </span>
          </button>
        )}
        <button className={styles.buttonAuth}>
          <Image
            src={appleLogo}
            className={styles.logo}
            alt="Apple Logo"
            width={20}
            height={20}
          />
          <span className={styles.textAuth}> Sign up with Apple ID </span>
        </button>
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
