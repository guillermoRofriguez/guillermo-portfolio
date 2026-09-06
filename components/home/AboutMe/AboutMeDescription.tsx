export default function AboutMeDescription() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-start gap-x-2">
        <hr className="w-8 text-(--primary) mt-4" />
        <p className="text-(--primary) text-[14px]">SOBRE MÍ</p>
      </div>
      <h1 className="text-[32px] text-[#DDE4E1] font-bold ">
        Soy Guillermo, desarrollador Full Stack enfocado en construir
        aplicaciones web modernas y experiencias digitales.
      </h1>
      <p className="text-[#BACAC5] text-[16px]">
        Mi pasión radica en transformar ideas complejas en interfaces limpias,
        funcionales y altamente eficientes. Creo firmemente que el buen diseño y
        la ingeniería sólida deben ir de la mano para crear productos exitosos.
      </p>
      <p className="text-[#BACAC5] text-[16px]">
        Priorizo la experiencia de usuario y mantengo una atención meticulosa a
        los detalles arquitectónicos, asegurando que cada línea de código aporte
        valor al objetivo final.
      </p>

      <div className="flex flex-wrap items-center pt-4 gap-3">
        <div className="flex items-center gap-x-2 py-2 px-4 bg-(--background) rounded-full border border-[#3C4A46] text-[#DDE4E1]">
          <div className="rounded-full size-2 bg-(--secondary)" />
          Based in Mexico
        </div>
        <div className="flex items-center gap-x-2 py-2 px-4 bg-(--background) rounded-full border border-[#3C4A46] text-[#DDE4E1]">
          Full Stack Developer
        </div>
        <div className="flex items-center gap-x-2 py-2 px-4 bg-(--background) rounded-full border border-[#3C4A46] text-[#57F1DB]">
          <div className="rounded-full size-2 bg-[#57F1DB]" />
          Open to opportunities
        </div>
      </div>
    </div>
  );
}
