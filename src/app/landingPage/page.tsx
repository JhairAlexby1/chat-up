import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Landing Page",
    description: "Page for landing page",
  };

export default function LandingPage() {
  return (

    <>
        <div className="text-neutral-50">Pagina dde Landing page</div>

        <Footer />

    </>

  )
}
