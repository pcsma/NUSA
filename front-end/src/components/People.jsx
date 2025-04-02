import { useEffect, useState } from "react";
import { client, urlFor } from "../client";

const People = () => {
  const [teamLab, setTeamLab] = useState([]);

  useEffect(() => {
    const query = `*[_type == "researchTeamLab"] | order(displayOrder asc){
      _id,
      name,
      role,
      image,
      colSpan,
      rowSpan,
      colStart,
      rowStart,
      displayOrder
    }`;
    client.fetch(query).then(setTeamLab);
  }, []);

  return (
    <div
      id="next-section"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 md:m-6"
    >
      {teamLab.map((member) => {
        const isLarge = member.name.includes("Mideth");

        // Responsive classNames
        const colSpan = isLarge ? "lg:col-span-2" : "lg:col-span-1";
        const rowSpan = isLarge ? "lg:row-span-2" : "lg:row-span-1";
        const colStart = isLarge && member.colStart ? `lg:col-start-${member.colStart}` : "";
        const rowStart = isLarge && member.rowStart ? `lg:row-start-${member.rowStart}` : "";

        return (
          <div
            key={member._id}
            className={`relative bg-white rounded-xl overflow-hidden shadow-md col-span-1 row-span-1 ${colSpan} ${rowSpan} ${colStart} ${rowStart}`}
          >
            <img
              src={urlFor(member.image).url()}
              alt={member.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white">
              <h1
                className={`font-semibold leading-tight ${
                  isLarge ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                }`}
              >
                {member.name}
              </h1>
              <p className={`${isLarge ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>
                {member.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default People;
