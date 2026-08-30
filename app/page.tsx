import AboutMe from "@/components/home/AboutMe";
import Container from "@/components/ui/Container";
import ScrollToExplore from "@/components/home/ScrollToExplore";

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <ScrollToExplore/>
    </Container>
  );
}
