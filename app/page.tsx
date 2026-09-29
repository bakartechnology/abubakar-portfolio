"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CvSection } from "@/components/CvSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CvModal } from "@/components/CvModal";

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <CvSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />

      {/* Global CV Interactive Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
