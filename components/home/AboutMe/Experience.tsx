import { ExperienceList } from "@/data/ExperienceList";
import { ExperienceInfo } from "@/interface/experienceInfo";
import { useEffect, useState } from "react";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  const [isLouder, setIsLouder] = useState(false);
  const [experienceList, setExperienceList] = useState<ExperienceInfo[]>([]);
  useEffect(() => {
    const getWorksList = () => {
      setExperienceList(ExperienceList);

      setTimeout(() => {
        setIsLouder(false);
      }, 2000);
    };
    getWorksList();
  }, []);

  return (
    <div className="flex flex-col gap-y-10 pt-12">
      <div className="flex items-start gap-x-2">
        <hr className="w-8 text-(--primary) mt-4" />
        <p className="text-(--primary) text-[14px]">ESPECIALIDADES</p>
      </div>
      {isLouder ? (
        <>Cargando</>
      ) : (
        <div className="flex flex-col">
          {experienceList.map(({ name, description }, index) => (
            <div
              className={`border-t border-[#3C4A46] ${experienceList.length - 1 == index && "border-b"}`}
              key={index}
            >
              <ExperienceContent
                count={index + 1}
                name={name}
                description={description}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
