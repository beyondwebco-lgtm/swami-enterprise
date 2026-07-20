"use client";

import { useState, useEffect } from "react";
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
import FormModal from "@/components/FormModal";

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    formUrl: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const handleOpenForm = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.url) {
        setModalState({
          isOpen: true,
          formUrl: detail.url,
          title: detail.title || "Online Enquiry Form",
          description: detail.description || "Complete the form below to connect with Swami Enterprises.",
        });
      }
    };

    window.addEventListener("swami-open-form", handleOpenForm);
    return () => window.removeEventListener("swami-open-form", handleOpenForm);
  }, []);

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

      <FormModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        formUrl={modalState.formUrl}
        title={modalState.title}
        description={modalState.description}
      />
    </>
  );
}
