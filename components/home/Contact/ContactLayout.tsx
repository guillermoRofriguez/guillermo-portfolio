import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactLayout() {
  return (
    <div className="py-32 flex flex-col items-center">
      <p className="text-(--secondary) text-sm mb-6">
        <EnvelopeIcon className="size-2.5" />
        CONTACTO
      </p>
      <h1 className="mb-4 text-[40px] font-bold text-[#DDE4E1]">
        ¿Tienes un proyecto en mente?
      </h1>
      <h3 className="text-[32px] text-[#BACAC5] font-bold mb-[48px]">
        Construyamos algo juntos.
      </h3>

      {/* <button className="focus:outline-none cursor-pointer bg-(--primary) rounded-xs w-96 h-14 flex items-center text-center font-bold justify-center gap-x-2 text-[14px] text-[#00574D]">
        CONTACTARME
        <ArrowRightIcon className="size-4" />
      </button> */}
      <button
        className="
    group relative
    flex h-14 w-96
    items-center justify-center
    overflow-hidden
    rounded-xs
    bg-(--primary)
    font-bold text-[14px]
    text-[#00574D]
    cursor-pointer
    focus:outline-none
  "
      >
        {/* Círculo */}
        <span
          className="
      absolute right-4
      size-8
      rounded-full
      bg-[#00574D]
      transition-transform
      duration-500
      ease-in-out
      group-hover:scale-[25]
    "
        />

        {/* Contenido */}
        <span
          className="
      relative z-10
      flex items-center gap-x-2
      transition-colors duration-300
      group-hover:text-white
    "
        >
          CONTACTARME
        </span>

        {/* Icono */}
        <span
          className="
      absolute right-4
      z-20
      flex size-8
      items-center justify-center
    "
        >
          <ArrowRightIcon
            className="
        size-4 text-white
        transition-transform duration-300
        group-hover:translate-x-1
      "
          />
        </span>
      </button>
    </div>
  );
}
