export default function AboutMe() {
  return (
    <div className="flex flex-col pt-8 mt-9.75 gap-y-6">
      <div className="flex items-start gap-x-2">
        <hr className="w-8 text-(--primary) mt-4" />
        <p className="text-(--primary) text-[14px]">FULL STACK DEVELOPER</p>
      </div>

      <h1 className="text-[40px] text-white font-bold">Hola, soy Guillermo.</h1>
      <h3 className="text-[#BACAC5] text-[32px] font-bold max-w-md  ">
        Construyo experiencias web modernas.
      </h3>
      <p className="text-[#BACAC5] text-[16px] pt-2 max-w-md">
        Desarrollo aplicaciones y productos digitales enfocados en resolver
        problemas reales, combinando diseño, tecnología y lógica de negocio.
      </p>

      <div className="flex items-center lg:flex-row flex-col pt-6 gap-4">
        <button className="focus:outline-none cursor-pointer bg-(--primary) px-6 h-12 text-[#3C4A46] rounded-xs text-[14px] lg:w-auto w-full">VER PROYECTOS</button>
        <button className="focus:outline-none cursor-pointer border border-[#3C4A46] px-6 h-12 rounded-xs text-[#DDE4E1] text-[14px] lg:w-auto w-full">CONTACTARME</button>
      </div>
    </div>
  );
}
