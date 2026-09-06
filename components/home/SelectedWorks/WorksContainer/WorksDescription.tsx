import { useCallback, useState } from "react";

interface Descriptions {
  description: string;
}
export default function WorksDescriptions({ description }: Descriptions) {
  const maxLength = 200;
  const isTextLarge = description.trim().length > maxLength;
  const [showMore, setSowLore] = useState(false);
  const descriptionConfig = useCallback(() => {
    if (isTextLarge) {
      return showMore ? description : `${description.slice(0, maxLength)}...`;
    }

    return description;
  }, [description, isTextLarge, showMore]);

  return (
    <p className="text-sm text-[#DDE4E1]">
      {descriptionConfig()}{" "}
      {isTextLarge ? (
        <button
          className="focus:outline-none cursor-pointer text-(--tertiary)"
          onClick={() => setSowLore((value) => !value)}
        >
          {showMore ? "Ver menos" : "Ver más"}
        </button>
      ) : (
        ""
      )}
    </p>
  );
}
