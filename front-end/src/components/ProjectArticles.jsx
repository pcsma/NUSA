import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";

const ProjectArticles = () => {
    const { id } = useParams();
    const [articles, setArticles] = useState([]);
    const [content, setContent] = useState([]);
    const navigate = useNavigate();
    const scrollToNextSection = () => {
        const section = document.getElementById("next-section");
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollPosition = sectionTop - viewportHeight / 2 + 250;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
      };
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    useEffect(() => {
    const articlesQuery = `*[_type == "article" && references(*[_type == "featuredProject" && slug.current == $id][0]._id)]{
        _id,
        title,
        date,
        excerpt,
        slug,
        image
    }`;

    client.fetch(articlesQuery, { id })
        .then((data) => {
            // ✅ Deduplicate by _id
            const uniqueArticlesMap = new Map();
            data.forEach(article => {
                if (!uniqueArticlesMap.has(article._id)) {
                    uniqueArticlesMap.set(article._id, article);
                }
            });
            const uniqueArticles = Array.from(uniqueArticlesMap.values());
            setArticles(uniqueArticles);
        })
        .catch((error) => {
            console.error("Sanity Fetch Error (Articles):", error);
        });
}, [id]);


    return (
        <div id="next-section" className="flex flex-col lg:flex-row px-3 sm:px-6 md:px-12 mt-8 min-h-screen items-center">
           {/* Navigation Section */}
           <div className="w-full lg:w-1/4 lg:pr-8 lg:sticky lg:top-32 lg:self-start lg:h-fit">
            {/* md & below: horizontal nav bar */}
            <div className="flex flex-row gap-2 lg:gap-4 mb-6 items-center lg:hidden">
                <button 
                onClick={() => { scrollToNextSection(); navigate("/") }} 
                className="index z-10 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                ←
                </button>
                <ul className="index z-10 flex flex-nowrap px-2 sm:px-4 md:px-6 gap-3 md:gap-4">
                    <li>
                        <Link
                        to={`/project/${id}/about`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                            location.hash === `/project/${id}/about` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                        >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={`/project/${id}/articles`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                            location.hash === `/project/${id}/articles` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                        >
                        Articles
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={`/project/${id}/researchTeam`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                            location.hash === `/project/${id}/researchTeam` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                        >
                        Research Team
                        </Link>
                    </li>
                </ul>
            </div>

            {/* lg: sticky vertical nav sidebar */}
            <aside className="hidden lg:block">
                <button 
                onClick={() => { scrollToNextSection(); navigate("/") }} 
                className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition cursor-pointer flex items-center"
                >
                <span className="hidden lg:inline">← Back to Projects</span>
                </button>

                <nav>
                <h3 className="text-lg font-semibold mb-2 uppercase text-gray-900">In This Project:</h3>
                <ul className="space-y-2">
                    <li>
                    <Link
                        to={`/project/${id}/about`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                        location.hash === `/project/${id}/about` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                    >
                        About
                    </Link>
                    </li>
                    <li>
                    <Link
                        to={`/project/${id}/articles`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                        location.hash === `/project/${id}/articles` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                    >
                        Articles
                    </Link>
                    </li>
                    <li>
                    <Link
                        to={`/project/${id}/researchTeam`}
                        onClick={scrollToNextSection}
                        className={`font-semibold hover:underline ${
                        location.hash === `/project/${id}/researchTeam` ? "text-blue-700 underline" : "text-gray-600"
                        }`}
                    >
                        Research Team
                    </Link>
                    </li>
                    {content.length > 0 && content.map((section) => (
                    <li key={section._id}>
                        <Link to={`/project/${id}#${section.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-500 hover:underline">
                        {section.title}
                        </Link>
                    </li>
                    ))}
                </ul>
                </nav>
            </aside>
            </div>
            {/* Artcile's Main Content */}
            <main className="w-full md:w-3/4">
                <div className="px-6 pb-6 md:px-12 mt-8">
                    <h2 className="text-3xl font-bold mb-6">Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <div key={article._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                    {article.image?.asset && (
                                        <img src={urlFor(article.image).url()} alt={article.title} className="w-full h-40 object-cover"/>
                                    )}
                                    <div className="p-4 ">
                                        <p className="text-gray-500 text-sm">{new Date(article.date).toDateString()}</p>
                                        <h3 className="text-lg font-semibold line-clamp-3">{article.title}</h3>
                                        <p className="text-gray-600 text-sm overflow:hidden line-clamp-3">{article.excerpt}</p>
                                        <Link onClick={() => {scrollToTop()}}
                                        to={`/project/${id}/articles/${article.slug.current}`} className="text-blue-500 hover:underline mt-2 inline-block">
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No articles available.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>

       
    );
};

export default ProjectArticles;
