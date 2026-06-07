import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DevelopmentStandardsSection } from "@/components/DevelopmentStandardsSection";
import { EmployersSection } from "@/components/EmployersSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkflowSection } from "@/components/WorkflowSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ProjectsSection />
        <WorkflowSection />
        <DevelopmentStandardsSection />
        <EmployersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
