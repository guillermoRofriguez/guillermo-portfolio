import { Works } from "@/interface/works";
import WorkTitle from "./WorkTitle";
import WorkImage from "./WorkImage";
import WorkTools from "./WorkTools";
import WorksDescriptions from "./WorksDescription";

export default function WorksContainer(works: Works) {
    console.log(works);
    
  const { title = "", count = 0, image, tools, description="", navigate } = works || {};
  console.log(navigate);
  
  return (
    <section className="flex flex-col gap-y-6">
      <WorkTitle title={title} count={count} />
      <WorkImage image={image} navigate={navigate}/>
      <WorksDescriptions description={description}/>
      <WorkTools toolsList={tools} />
    </section>
  );
}
