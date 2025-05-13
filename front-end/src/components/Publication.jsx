import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { Link } from "react-router-dom";

const Publication = () => {
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    const query = `*[_type == "publication" && defined(slug.current)] | order(order asc) {
      _id,
      publicationName,
      publicationDescription,
      image,
      slug,
      citation
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched publications:", data);
        setPublication(data);
      })

      .catch((error) => console.error("Sanity fetch error:", error));
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      id="next-section"
      className={`grid grid-cols-1 grid-rows-${publication.length} m-6`}
    >
      {publication.map((item, index) => (
        <Link
        onClick={() => {scrollToTop()}}
          key={item._id || index}
          to={`/publications/${item.slug?.current || ""}`}
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full border-t-2 border-gray-300" />
            <div className="relative flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-auto mx-6 cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:text-sky-600">
              <div className="mx-6 my-4 w-full md:w-2/3">
                <h1 className="font-bold text-xl md:text-2xl text-justify">
                  {item.publicationName}
                </h1>
                <h2 className="w-auto font-medium">
                  {item.citation}
                </h2>
              </div>
              <div className="hidden md:block h-40 md:h-44 my-2 mx-6">
                <img
                  className="h-full w-auto max-h-44 object-contain"
                  src={urlFor(item.image).url()}
                  alt={item.publicationName}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Publication;
