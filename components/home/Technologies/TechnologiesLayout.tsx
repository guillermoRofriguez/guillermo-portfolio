import { TechnologiesList } from "@/data/TechnologiesData";
import { Technologies } from "@/interface/technologies";
import { useEffect, useState } from "react";
import TechnologiesContent from "./TechnologiesContent";

export default function TechnologiesLayout() {
  const [isLouder, setIsLouder] = useState(false);
  const [experienceList, setExperienceList] = useState<Technologies[]>([]);
  useEffect(() => {
    const getTechnologiesList = () => {
      setExperienceList(TechnologiesList);

      setTimeout(() => {
        setIsLouder(false);
      }, 2000);
    };
    getTechnologiesList();
  }, []);

  return (
    <div className="flex flex-col pt-20 gap-y-12">
      <div className="flex items-start gap-x-2">
        <hr className="w-8 text-(--primary) mt-4" />
        <p className="text-(--primary) text-[14px]">TECNOLOGÍAS</p>
      </div>
      <div className="flex flex-col gap-y-10">
        {isLouder ? (
          <>Cargando</>
        ) : (
          experienceList.map(({ title, technologies }, index) => (
            <TechnologiesContent
              title={title}
              technologies={technologies}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}
