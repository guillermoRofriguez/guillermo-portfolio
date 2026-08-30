import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return <section className="xl:mx-10 xl:px-5">{children}</section>;
}
