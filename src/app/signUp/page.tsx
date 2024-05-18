import { FormSignUp } from "@/components/formSignUp/FormSignUp";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page",
  description: "Sign Up Page",
};

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className="mx-4 rounded-3xl"
          src="/images/registerImage.jpg"
          width={333}
          height={333}
          alt="Picture of the author"
        />
      </div>

      <FormSignUp />
    </div>
  );
}
