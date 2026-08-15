import Hero from "@/components/about/Hero";
import ShortBio from "@/components/about/ShortBio";
import Story from "@/components/about/Story";
import TechJourney from "@/components/about/TechJourney";
import Gaming from "@/components/about/Gaming";
import RevexName from "@/components/about/RevexName";
import LifeVision from "@/components/about/LifeVision";
import Goals from "@/components/about/Goals";
import QuickInfo from "@/components/about/QuickInfo";
import Schools from "@/components/about/Schools";
import Skills from "@/components/about/Skills";
import Footer from "@/components/common/Footer";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <ShortBio />
      <Story />
      <TechJourney />
      <Gaming />
      <RevexName />
      <LifeVision />
      <Goals />
      <QuickInfo />
      <Schools />
      <Skills />
      <Footer />
    </>
  );
}