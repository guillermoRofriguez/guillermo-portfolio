import Container from "../ui/Container";

export default function Header() {
  return (
    <div className="border-b border-[#3C4A46]/20">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-3xl text-slate-100 font-bold">
            G / Guillermo
          </h1>
        </div>
      </Container>
    </div>
  );
}
