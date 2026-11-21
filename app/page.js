import Image from "next/image";
// import Hero from "./components/hero/Hero";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/ServiceSection";
import SubscriptionsSection from "./components/Plans";
import BranchesSection from "./components/Branches";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SubscriptionsSection />
      <BranchesSection />
      <Footer />
    </>
  );
}
