"use client";
import Container from "@/components/ui/Container";
import AboutMeDescription from "./AboutMeDescription";
import Experience from "./Experience";

export default function AboutMeLayout() {
  return (
    <section className="py-24 bg-[#1A211F] overflow-hidden">
      <div >
        <Container>
          <div data-aos="fade-left" className="flex flex-col gap-y-16">
            <AboutMeDescription />
            <Experience />
          </div>
        </Container>
      </div>
    </section>
  );
}
