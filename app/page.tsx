"use client";
import AboutMe from "@/components/home/MyInformation";
import Container from "@/components/ui/Container";
import ScrollToExplore from "@/components/home/ScrollToExplore";
import SelectedWorksLayout from "@/components/home/SelectedWorks/SelectedWorksLayout";
import AboutMeLayout from "@/components/home/AboutMe/AboutMeLayout";
import TechnologiesLayout from "@/components/home/Technologies/TechnologiesLayout";
import ContactLayout from "@/components/home/Contact/ContactLayout";

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <ScrollToExplore />
      <SelectedWorksLayout />
      <AboutMeLayout />
      <TechnologiesLayout />
      <ContactLayout />
    </Container>
  );
}
