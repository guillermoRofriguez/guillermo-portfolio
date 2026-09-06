import { Works } from "@/interface/works";
import Panel from "@/public/imagesWorks/panelAdmin.png";

export const                WorksList: Array<Works> = [
  {
    title: "Staywuw",
    image: Panel,
    count: 1,
    navigate: "https://staywuw.com/",
    description:
      "Staywuw es una plataforma de reservas desarrollada en colaboración con Royal Vacations México, que permite a los usuarios descubrir y reservar hoteles, tours y servicios de transporte desde una misma experiencia digital. La plataforma integra búsqueda y exploración de destinos, detalle de servicios, recomendaciones, creación de itinerarios, captura de información del viajero y un flujo completo de checkout con pasarela de pago mediante el SDK de Stripe.",
    tools: [
      "Next.js",
      "Tailwind",
      "React",
      "Stripe SDK",
      "Clip SDK",
      "APIs REST",
      "Git",
    ],
  },
];
