interface Tools {
  toolsList: Array<string>;
}
export default function WorkTools({ toolsList }: Tools) {
  return (
    <div className="flex flex-wrap gap-2">
      {toolsList.map((tool, index) => (
        <p
          className="rounded-xs py-1 px-3 bg-[#2F3634] border border-[#3C4A46] text-[#DDE4E1] text-xs"
          key={index}
        >
          {tool}
        </p>
      ))}
    </div>
  );
}
