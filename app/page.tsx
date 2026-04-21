import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuPreviewSection from "@/components/sections/MenuPreviewSection";
import GallerySection from "@/components/sections/GallerySection";
import ReservationSection from "@/components/sections/ReservationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuPreviewSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
