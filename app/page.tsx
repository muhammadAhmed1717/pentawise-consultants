import ConsultationModal from "@/components/ConsultationModal";
import { ConsultationProvider } from "@/components/ConsultationContext";
import ContactSection from "@/components/ContactSection";
import Destinations from "@/components/Destinations";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Universities from "@/components/Universities";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <ConsultationProvider>
      <main>
        <Hero />
        <Destinations />
        <Universities />
        <Services />
        <SuccessStories />
        <ContactSection />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsultationModal />
    </ConsultationProvider>
  );
}
