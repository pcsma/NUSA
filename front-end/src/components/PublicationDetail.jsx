import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";


const PublicationDetail = () => {
  const { publicationId } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState(null);
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
    const decodedSlug = decodeURIComponent(publicationId);
    const query = `*[_type == "publication" && slug.current == $slug][0]{
      publicationName,
      citation,
      abstract,
      linkToFull,
      image
    }`;
    client.fetch(query, { slug: decodedSlug })
      .then((data) => setPublication(data))
      .catch(console.error);
  }, [publicationId]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!publication) return <p className="text-center text-gray-500 p-6">Loading...</p>;

  return (
      <div id="next-section" className="max-w-4xl mx-auto px-6 py-10">
         <button
            onClick={() => {scrollToNextSection();navigate(`/publication`)}}
            className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition">
            ← Back to Publication List
        </button>
        <h2 className="text-xl font-bold mb-4">Citation</h2>
        <p className="mb-6 text-justify">{publication.citation}</p>

        <h2 className="text-xl font-bold mb-4">Abstract</h2>
        <p className="mb-6 text-justify">{publication.abstract}</p>

        {publication.linkToFull && (
          <a
            href={publication.linkToFull}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read Full Publication →
          </a>
        )}
      </div>
  );
};

export default PublicationDetail;
