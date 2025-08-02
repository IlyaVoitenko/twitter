"use client";
import { signIn } from "next-auth/react";
import arrowDown from "../../assets/ArrowBlackDown.svg";
import googleLogo from "../../assets/google.svg";
import appleLogo from "../../assets/apple-inc.svg";
import styles from "./SignInProvider.module.scss";
import Image from "next/image";

interface SignInProviderProps {
  user?: {
    name?: string | undefined | null;
    email?: string | undefined | null;
    image?: string | undefined | null;
    provider?: string | undefined | null;
  };
  typeBtn?: string | undefined;
}

const SignInProvider = ({ user, typeBtn }: SignInProviderProps) => {
  const firstItem = user?.name;
  const nameUser = firstItem ? firstItem.split(" ")[0] : null;
  return (
    <>
      {user && user?.provider === typeBtn ? (
        <button className={styles.buttonAuth}>
          <div className={styles.contentContainer}>
            <div className={styles.textAuthAndAvatarContainer}>
              <Image
                src={user.image || googleLogo}
                className={styles.logo}
                alt="Google Logo"
                width={20}
                height={20}
              />
              <div className={styles.textAuthContainer}>
                {nameUser && (
                  <span className={styles.nameUser}>Sign in as {nameUser}</span>
                )}
                <span className={styles.email}>
                  {user.email}&nbsp;
                  <Image
                    className={styles.arrowDown}
                    src={arrowDown}
                    alt=""
                    width={10}
                    height={10}
                  />
                </span>
              </div>
            </div>
            <Image
              src={typeBtn === "google" ? googleLogo : appleLogo}
              className={styles.logo}
              alt="User Image"
              width={20}
              height={20}
            />
          </div>
        </button>
      ) : (
        <button
          className={styles.buttonAuth}
          onClick={() => user?.provider && signIn(user?.provider)}
        >
          <Image
            src={typeBtn === "google" ? googleLogo : appleLogo}
            className={styles.logo}
            alt="Google Logo"
            width={20}
            height={20}
          />
          <span className={styles.textAuth}>
            {typeBtn === "google"
              ? "Sign up with Google"
              : "Sign up with Apple ID"}
          </span>
        </button>
      )}
    </>
  );
};

export default SignInProvider;
