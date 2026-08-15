import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import SectionCards from "@/components/home/SectionCards";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Introduction />

      <SectionCards />

      <Footer />
    </>
  );
}