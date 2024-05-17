import { Footer } from "@/components/footer";
import { Metadata } from "next";
import styles from "./ladingPage.module.css";


export const metadata: Metadata = {
    title: "Landing Page",
    description: "Page for landing page",
  };

export default function LandingPage() {
  return (

    <div className="flex justify-between items-center text-white my-5	mx-10	">
      
      <div className="">
        LOGO
      </div>

      <div className="space-x-10">
        <button>Team</button>
        <button>Iniciar Sesion</button>
        <button className={styles.button}>Registrarse</button>
      </div>

    </div>

  )
}
