import { StaticImageData } from "next/image";

export interface Works {
  title: string;
  count: number;
  image: StaticImageData;
  description?: string;
  navigate?: string;
  tools: Array<string>;
}
