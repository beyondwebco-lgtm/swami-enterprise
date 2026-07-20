import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceVerticals from "@/components/ServiceVerticals";
import QuickFormsSection from "@/components/QuickFormsSection";
import About from "@/components/About";
import FounderProfile from "@/components/FounderProfile";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <ServiceVerticals />
      <QuickFormsSection />
      <FounderProfile />
      <VisionMission />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <ContactForm />
    </>
  );
}
