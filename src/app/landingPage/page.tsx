import { Footer } from "@/components/footer";
import { Metadata } from "next";
import styles from "./ladingPage.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Page for landing page",
};

export default function LandingPage() {
  return (
    <>
      <div className="flex justify-between items-center text-white my-5	mx-10 ">
        <div className="">LOGO</div>

        <div className="space-x-10">
        

          <Link href="../login">
            <button className={styles.button1}>Login</button>
          </Link>

          <Link href="../signUp">
            <button className={styles.button1}>Registrarse</button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center text-white h-screen transform -translate-y-24">
        <div className="mr-4 flex flex-col items-center">
          <h1 className={styles.jockeyFont}>
            Más que una red social, un <br /> movimiento de aceptación en la
            <span className="text-purple-800"> UP</span>
          </h1>
          
        </div>

        <div className="ml-4">
          <video
            className="rounded-2xl"
            width="600"
            height="600"
            autoPlay
            loop
            muted
          >
            <source src="/videos/videosLanding/landing.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="text-center text-white mx-auto max-w-5xl transform -translate-y-40">
        <h2 className={styles.text2}>
          Explora perspectivas únicas, comparte tus opiniones e inspírate con
          las historias de tus compañeros. Juntos, construiremos comunidad de
          aceptación, empatía y entendimiento que superara los límites del
          campus, preparándonos para convertirnos en líderes comprometidos con
          la diversidad en nuestras futuras carreras y comunidades.
        </h2>

        <div className="flex items-center justify-center mt-10">
          <Image
            className="mx-4 rounded-3xl"
            src="/images/photosLanding/1.jpg"
            width={333}
            height={333}
            alt="Picture of the author"
          />

          <Image
            className="mx-4 rounded-3xl"
            src="/images/photosLanding/2.jpg"
            width={333}
            height={333}
            alt="Picture of the author"
          />

          <Image
            className="mx-4 rounded-3xl"
            src="/images/photosLanding/3.jpg"
            width={333}
            height={333}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="text-center text-white transform -translate-y-10">
        <h1 className={styles.jockeyFont}>
          Toda la comunidad de la <span className="text-purple-800"> UP</span>{" "}
          en un <br />
          solo lugar
        </h1>
      </div>

      <div className="flex items-center justify-center ">
        {" "}
        <video
          className="rounded-2xl"
          width="1000"
          height="500"
          autoPlay
          loop
          muted
        >
          <source src="/videos/videosLanding/camp.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Footer />
    </>
  );
}
