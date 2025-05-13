import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { Link } from 'react-router-dom';

const People = () => {
  const [teamLab, setTeamLab] = useState([]);

  useEffect(() => {
    const query = `*[_type == "researchTeamLab"] | order(displayOrder asc){
      _id,
      name,
      role,
      image,
      slug,
      colSpan,
      rowSpan,
      colStart,
      rowStart,
      displayOrder
    }`;
    client.fetch(query).then(setTeamLab);
  }, []);

  return (
    <div id="next-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 bg-white">
      {teamLab.map((member) => {
        const isLarge = member.name.includes("Mideth");

        const colSpan = isLarge ? "lg:col-span-2" : "lg:col-span-1";
        const rowSpan = isLarge ? "lg:row-span-2" : "lg:row-span-1";
        const aspect = isLarge ? "aspect-[3/2]" : "aspect-square";


        return (
          <Link to={`/people/${member.slug.current}`}
          key={member._id}
          className={`relative group block ${colSpan} ${rowSpan} ${aspect} bg-white border border-gray-300`}>
          <div
            key={member._id}
            className={`relative group ${colSpan} ${rowSpan} aspect-square bg-white border border-gray-300 cursor-pointer`}
            >
            {/* Top-right image */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2">
              <img
                src={urlFor(member.image).width(600).height(600).fit("crop").url()}
                alt={member.name}
                className={`w-full h-full ${
                  isLarge ? "object-contain" : "object-cover"
                } grayscale group-hover:grayscale-0 transition duration-300`}
                />
            </div>

            {/* Bottom-left text */}
            <div className="absolute bottom-20 left-6 text-left">
              <h2
                className={`font-bold leading-tight transition duration-300 ${
                  isLarge
                  ? "text-2xl md:text-3xl group-hover:text-blue-600"
                  : "text-lg group-hover:text-blue-600"
                }`}
                >
                {member.name}
              </h2>
              <p
                className={`transition duration-300 ${
                  isLarge
                  ? "text-lg md:text-xl text-gray-700 group-hover:text-blue-500"
                  : "text-sm text-gray-600 group-hover:text-blue-500"
                }`}
                >
                {member.role}
              </p>
            </div>
          </div>
        </Link>

        );
      })}
    </div>
  );
};

export default People;
