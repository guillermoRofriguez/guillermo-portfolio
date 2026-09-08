"use client";
import Container from "@/components/ui/Container";
import { WorksList } from "@/data/WorksLists";
import { Works } from "@/interface/works";
import { useEffect, useState } from "react";
import WorksContainer from "./WorksContainer/WorksContainer";

export default function SelectedWorksLayout() {
  const [isLouder, setIsLouder] = useState(true);

  const [worksList, setWorksList] = useState<Works[]>([]);
  // console.log(WorksList);
  
  useEffect(() => {
    const getWorksList = () => {
      setWorksList(WorksList);

      setTimeout(() => {
        setIsLouder(false);
      }, 2000);
    };
    getWorksList();
  }, []);

  return (
    <section className="py-24">
      <Container>
        <h2 className="text-[48px] text-[#DDE4E1] font-bold mb-16">
          Proyectos destacados
        </h2>
        {isLouder ? (
          <></>
        ) : (
          worksList.map(
            ({ count, image, title, tools, description, navigate }, index) => (
              <WorksContainer
                title={title}
                count={count}
                image={image}
                description={description}
                tools={tools}
                navigate={navigate}
                key={index}
              />
            ),
          )
        )}
      </Container>
    </section>
  );
}
