import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";
import { PortableText } from "@portabletext/react";
import ReactModal from "react-modal";

const ProjectArticleDetail = () => {
  const { id, articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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
    const decodedSlug = decodeURIComponent(articleId);
    const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
      title,
      date,
      content,
      image,
      gallery[]{
        image,
        caption
      }
    }`;

    client.fetch(articleQuery, { slug: decodedSlug })
      .then((data) => setArticle(data))
      .catch((error) => console.error("Sanity Fetch Error (Article Detail):", error));
  }, [articleId]);

  const openModal = (imgObj) => {
    setSelectedImage(imgObj);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  if (!article) return <p className="text-center text-gray-500 p-6">Loading...</p>;

  return (
    <div>
      {/* Content */}
      <div id="next-section" className="flex flex-col lg:flex-row px-6 md:px-12 mt-8 min-h-screen">
        <aside className="w-full md:w-1/4 md:pr-8 sticky top-32 self-start h-fit">
          <button
            onClick={() => { scrollToNextSection(); navigate(`/project/${id}/articles`) }}
            className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition"
          >
            ← Back to Article's List
          </button>
        </aside>

        <div className="prose prose-lg text-gray-800 w-full">
          <PortableText
            value={article.content}
            components={{
              block: {
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-500 italic pl-4 my-4 text-gray-700">
                    {children}
                  </blockquote>
                ),
                normal: ({ children }) => <p className="text-base leading-relaxed mb-2">{children}</p>,
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />

          {/* Gallery Section */}
          {article.gallery?.length > 0 && (
            <section className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {article.gallery.map((img, idx) => (
                  <div key={idx} className="cursor-pointer" onClick={() => openModal(img)}>
                    <img
                      src={urlFor(img.image).width(400).url()}
                      alt={img.caption}
                      className="w-full h-48 object-cover rounded"
                    />
                    <p className="text-sm text-center mt-1 text-gray-600 line-clamp-2">{img.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center px-4 z-[9999]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
      >
        {selectedImage && (
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 pt-10">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow hover:text-red-500 z-[9999]"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={urlFor(selectedImage.image).url()}
              alt={selectedImage.caption}
              className="w-full max-h-[70vh] object-contain mb-4 rounded"
            />
            <p className="text-center text-base text-gray-800">{selectedImage.caption}</p>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default ProjectArticleDetail;
