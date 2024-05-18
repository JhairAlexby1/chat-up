import { FormSignUp } from "@/components/formSignUp/FormSignUp";
import Image from "next/image";
import styles from "./page.module.css";

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
