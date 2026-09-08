import { ExperienceInfo } from "@/interface/experienceInfo";

export default function ExperienceContent(experience: ExperienceInfo) {
  const { count, name, description } = experience || {};
  const numberCount = Number(count) > 9 ? count : `0${count}`;

  return (
    <div className="py-8 flex flex-col gap-y-4">
      <span className="text-(--secondary) text-sm">{numberCount}</span>
      <h2 className="text-[32px] font-bold text-[#DDE4E1]">{name}</h2>
      <p className="text-[16px] text-[#BACAC5]">{description}</p>
    </div>
  );
}
