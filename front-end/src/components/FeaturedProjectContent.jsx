import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { client, urlFor } from "../client";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

const ProjectContent = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [aboutContent, setAboutContent] = useState(null);
    const [content, setContent] = useState([]);
    const location = useLocation();
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
        if (!id) return;

        const query = `*[_type == "featuredProject" && slug.current == $id][0]{
            title,
            description,
            image,
            "content": content[]->{
                _id, 
                title, 
                content, 
                image
            }
        }`;

        client.fetch(query, { id })
            .then((data) => {
                if (data) {
                    setProject(data);
                    if (data.content?.length > 0) {
                        setAboutContent(data.content[0]); // First content block as "About"
                        setContent(data.content.slice(1)); // Store remaining sections
                    }
                }
            })
            .catch((error) => {
                console.error("Sanity Fetch Error:", error);
            });
    }, [id]);

    if (!project) return <p className="text-center text-gray-500 p-6">Loading...</p>;

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
                            location.pathname === `/project/${id}/about` ? "text-blue-700 underline" : "text-gray-600"
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
                            location.pathname === `/project/${id}/articles` ? "text-blue-700 underline" : "text-gray-600"
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
                            location.pathname === `/project/${id}/researchTeam` ? "text-blue-700 underline" : "text-gray-600"
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
                        location.pathname === `/project/${id}/about` ? "text-blue-700 underline" : "text-gray-600"
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
                        location.pathname === `/project/${id}/articles` ? "text-blue-700 underline" : "text-gray-600"
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
                        location.pathname === `/project/${id}/researchTeam` ? "text-blue-700 underline" : "text-gray-600"
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
            {/* ✅ Main Content Area */}
            <main className="w-full md:w-3/4">
                {/* ✅ About the Project (First Section) */}
                {aboutContent && (
                    <section id="about" className="mb-12">
                        <div className="prose prose-lg max-w-none text-gray-700 text-base leading-relaxed">
                            <PortableText 
                                value={aboutContent.content} 
                                components={{
                                    
                                    marks: {
                                        link: ({ value, children }) => (
                                        <a
                                        href={value.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline">
                                        {children}
                                        </a>
                                        ),
                                    },
                                }}
                            />
                        </div>
                    </section>
                )}

                {/* ✅ Display Other Sections */}
                {content.length > 0 && content.map((sub) => (
                    <section key={sub._id} id={sub.title.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
                        <h2 className="text-2xl font-semibold">{sub.title}</h2>
                        {sub.image?.asset && (
                            <img src={urlFor(sub.image).url()} 
                                alt="Project Content" 
                                className="w-full h-auto max-h-60 object-cover rounded-lg my-4"
                            />
                        )}
                        <div className="prose prose-lg max-w-none text-gray-700 text-base leading-relaxed">
                            <PortableText 
                                value={sub.content} 
                                components={{
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
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default ProjectContent;
