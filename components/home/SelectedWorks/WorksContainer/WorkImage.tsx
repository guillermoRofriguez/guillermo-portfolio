import Image, { StaticImageData } from "next/image";

interface WorkImageProps {
  image: StaticImageData;
  navigate?: string;
}

export default function WorkImage({ image, navigate }: WorkImageProps) {
    console.log(navigate);
  const handleNavigate = () => {
    
    window.open(navigate)
  };
  return (
    <div
      onClick={() => (navigate ? handleNavigate() : {})}
      className={`relative aspect-[16/8] overflow-hidden ${navigate ? "cursor-pointer" : "cursor-no-drop"}`}
    //   className={`relative aspect-[16/10] w-full overflow-hidden ${navigate ? "cursor-pointer" : "cursor-no-drop"}`}
    >
      <Image
        src={image}
        alt="works-image"
        fill
        quality={100}
        loading="lazy"
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
