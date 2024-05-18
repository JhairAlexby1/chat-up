import Image from "next/image";
import styles from "./login.module.css";
import {FormLogin}  from "@/components/formLogin/FormLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login Page",
};

export default function Login() {
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
      
        <FormLogin />
      
    </div>
    )}