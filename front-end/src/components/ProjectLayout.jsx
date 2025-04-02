// import { useEffect, useState } from "react";
// import { useParams, useNavigate, Routes, Route, NavLink, Navigate } from "react-router-dom";
// import { client } from "../client";
// import { PortableText } from "@portabletext/react";
// import ProjectArticles from "./ProjectArticles";
// import ResearchTeam from "./ResearchTeam";

// const ProjectLayout = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [project, setProject] = useState(null);
//     const [aboutContent, setAboutContent] = useState(null);

//     useEffect(() => {
//         if (!id) return;

//         const query = `*[_type == "featuredProject" && slug.current == $id][0]{
//             title,
//             description,
//             "content": content[]->{
//                 _id, 
//                 title, 
//                 content
//             }
//         }`;

//         client.fetch(query, { id })
//             .then((data) => {
//                 if (data) {
//                     setProject(data);
//                     if (data.content?.length > 0) {
//                         setAboutContent(data.content[0]); // First content block as "About"
//                     }
//                 }
//             })
//             .catch((error) => {
//                 console.error("Sanity Fetch Error:", error);
//             });
//     }, [id]);

//     if (!project) return <p className="text-center text-gray-500 p-6">Loading...</p>;

//     return (
//         <div className="flex flex-col md:flex-row px-6 md:px-12 mt-8">
//             {/* ✅ Sidebar Navigation */}
//             <aside className="w-full md:w-1/4 md:pr-8">
//                 <button 
//                     onClick={() => navigate(-1)} 
//                     className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition cursor-pointer"
//                 >
//                     ← Back to Projects
//                 </button>
//                 <nav className="sticky top-20">
//                     <h3 className="text-lg font-semibold mb-2 uppercase text-gray-900">In This Project:</h3>
//                     <ul className="space-y-2">
//                         <li>
//                             <NavLink 
//                                 to={`/project/${id}/about`} 
//                                 className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-gray-600 font-semibold hover:underline"}
//                             >
//                                 About
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink 
//                                 to={`/project/${id}/articles`} 
//                                 className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-gray-600 font-semibold hover:underline"}
//                             >
//                                 Articles
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink 
//                                 to={`/project/${id}/research-team`} 
//                                 className={({ isActive }) => isActive ? "text-blue-700 font-bold" : "text-gray-600 font-semibold hover:underline"}
//                             >
//                                 Research Team
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </nav>
//             </aside>

//             {/* ✅ Main Content Area */}
//             <main className="w-full md:w-3/4">
//                 <Routes>
//                     {/* Default Page: Redirect to /about */}
//                     <Route index element={<Navigate to="about" />} />

//                     {/* About Section */}
//                     <Route path="about" element={
//                         aboutContent ? (
//                             <section id="about" className="mb-12">
//                                 <div className="text-gray-700 text-base leading-relaxed">
//                                     <PortableText 
//                                         value={aboutContent.content} 
//                                         components={{
//                                             block: {
//                                                 h1: ({ children }) => <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>,
//                                                 h2: ({ children }) => <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>,
//                                                 h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
//                                                 blockquote: ({ children }) => (
//                                                     <blockquote className="border-l-4 border-gray-500 italic pl-4 my-4 text-gray-700">
//                                                         {children}
//                                                     </blockquote>
//                                                 ),
//                                                 normal: ({ children }) => <p className="text-base leading-relaxed mb-2">{children}</p>
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                             </section>
//                         ) : <p className="text-gray-500">No content available from.</p>
//                     } />

//                     {/* Articles Section */}
//                     <Route path="articles" element={<ProjectArticles />} />

//                     {/* Research Team Section */}
//                     <Route path="research-team" element={<ResearchTeam />} />
//                 </Routes>
//             </main>
//         </div>
//     );
// };

// export default ProjectLayout;
