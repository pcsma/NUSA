import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";
import { PortableText } from "@portabletext/react";

const ProjectArticleDetail = () => {
    const { id, articleId } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
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
            image
        }`;

        client.fetch(articleQuery, { slug: decodedSlug })
            .then((data) => setArticle(data))
            .catch((error) => console.error("Sanity Fetch Error (Article Detail):", error));
    }, [articleId]);

    if (!article) return <p className="text-center text-gray-500 p-6">Loading...</p>;

    const bgImageStyle = article.image?.asset
        ? {
              backgroundImage: `url(${urlFor(article.image).url()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "40vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textShadow: "0 0 8px rgba(0,0,0,0.6)",
              padding: "2rem",
          }
        : {};

    return (
        <div>
            <div id="next-section" className="flex flex-col lg:flex-row px-6 md:px-12 mt-8 min-h-screen">
                <aside className="w-full md:w-1/4 md:pr-8 sticky top-32 self-start h-fit">
                    <button
                        onClick={() => {scrollToNextSection();navigate(`/project/${id}/articles`)}}
                        className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition">
                        ← Back to Article's List
                    </button>
                </aside>

                <div className="prose prose-lg text-gray-800">
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
                                normal: ({ children }) => <p className="text-base leading-relaxed mb-2">{children}</p>
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
                                )
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectArticleDetail;
