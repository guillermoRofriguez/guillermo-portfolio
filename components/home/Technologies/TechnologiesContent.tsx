import { Technologies } from "@/interface/technologies";

export default function TechnologiesContent(technologiesInfo: Technologies) {
  const { title, technologies } = technologiesInfo || {};
  return (
    <section className="flex flex-col gap-y-4">
      <p className="text-[#BACAC5] text-[16px]">{title}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology, index) => (
          <div
            key={index}
            className="py-2 px-4 rounded-xs border border-[#3C4A46] text-[#DDE4E1]"
          >
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
}
