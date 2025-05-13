import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";

const PersonOverview = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);

  const scrollToNextSection = () => {
    const section = document.getElementById("next-section");
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollPosition = sectionTop - viewportHeight / 2 + 250;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const decodedSlug = decodeURIComponent(slug);
    const query = `*[_type == "researchTeamLab" && slug.current == $slug][0]{
      name,
      role,
      image,
      overviewTitle,
      overviewText
    }`;
    client
      .fetch(query, { slug: decodedSlug })
      .then((data) => setPerson(data))
      .catch(console.error);
  }, [slug]);


  if (!person) {
    return <div className="p-6 text-center text-gray-500">Loading...</div>;
  }

  return (
    <div id="next-section" className="min-h-screen bg-white font-sans">
      {/* Back Button */}
      <div className="index z-100 px-6 py-4 md:px-20">
        <button
          onClick={() => {
            scrollToNextSection();
            navigate("/people");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          ← Back to People
        </button>
      </div>

      {/* Overview Content */}
      <div className="px-6 md:px-20 py-10">
        {person.overviewTitle && (
          <h3 className="text-pink-600 font-bold uppercase text-sm mb-2 tracking-wide">
            {person.overviewTitle}
          </h3>
        )}
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          {person.overviewText}
        </p>
      </div>
    </div>
  );
};

export default PersonOverview;
