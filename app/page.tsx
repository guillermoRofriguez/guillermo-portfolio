import AboutMe from "@/components/home/AboutMe";
import Container from "@/components/ui/Container";
import ScrollToExplore from "@/components/home/ScrollToExplore";
import SelectedWorksLayout from "@/components/home/SelectedWorks/SelectedWorksLayout";
import AboutMeLayout from "@/components/home/AboutMe/AboutMeLayout";

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <ScrollToExplore/>
      <SelectedWorksLayout/>
      <AboutMeLayout/>
    </Container>
  );
}
