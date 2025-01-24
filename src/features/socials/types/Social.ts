import { ClassValue } from "clsx";

export type Social = {
  url: string;
  imageUrl: string;
  imageAltText: string;
  width: number;
  height: number;
  className?: ClassValue;
};
