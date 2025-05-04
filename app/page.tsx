import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Action from "@/app/components/Action";
import FAQ from "@/app/components/FAQ";
import ProductShowCase from "@/app/components/ProductShowCase";
import OurMission from "@/app/components/OurMission";
import TrustUs from "@/app/components/TrustUs";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero/>
      <TrustUs />
      <OurMission />
      <ProductShowCase />
      <FAQ />
      <Action />
      <Footer />
    </div>
  );
}
