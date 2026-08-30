import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-40 border-t border-[#3C4A46]/10">
      <Container>
        <div className="flex lg:flex-row flex-wrap items-center justify-center max-lg:gap-y-7 lg:justify-between">
          <h1 className="text-5xl text-slate-100 font-bold">G / Guillermo</h1>
          <p className="text-[#BACAC5] text-md">Built by Guillermo. All rights reserved.</p>

          <div className="flex items-start gap-x-6 ">
            <Link className="text-[#BACAC5] text-lg" href="#">LinkedIn</Link>
            <Link className="text-[#BACAC5] text-lg" href="#">GitHub</Link>
            <Link className="text-[#BACAC5] text-lg" href="#">Twitter</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
