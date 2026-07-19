import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceVerticals from "@/components/ServiceVerticals";
import About from "@/components/About";
import FounderProfile from "@/components/FounderProfile";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import VisionMission from "@/components/VisionMission";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <ServiceVerticals />
      <FounderProfile />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <VisionMission />
      <ContactForm />
    </>
  );
}
