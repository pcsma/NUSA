import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { client, urlFor } from "../client";

const ResearchTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
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

    const query = `
            *[_type == "researchTeam" && project->slug.current == $id]{
            _id,
            name,
            role,
            image,
            description,
            group,
            order,
            }
            `;

    client
      .fetch(query, { id })
      .then((data) => {
        console.log(
          "Ordered Team:",
          data.map((x) => `${x.order} - ${x.name}`)
        );
        setTeam(data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div
      id="next-section"
      className="flex flex-col lg:flex-row px-6 md:px-12 mt-8 min-h-screen"
    >
      {/* Navigation Section */}
      <div className="w-full lg:w-1/4 lg:pr-8 lg:sticky lg:top-32 lg:self-start lg:h-fit">
        {/* md & below: horizontal nav bar */}
        <div className="flex flex-row gap-2 lg:gap-4 mb-6 items-center lg:hidden">
          <button
            onClick={() => {
              scrollToNextSection();
              navigate("/");
            }}
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
                  location.hash === `/project/${id}/about`
                    ? "text-blue-700 underline"
                    : "text-gray-600"
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
                  location.hash === `/project/${id}/articles`
                    ? "text-blue-700 underline"
                    : "text-gray-600"
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
                  location.hash === `/project/${id}/researchTeam`
                    ? "text-blue-700 underline"
                    : "text-gray-600"
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
            onClick={() => {
              scrollToNextSection();
              navigate("/");
            }}
            className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition cursor-pointer flex items-center"
          >
            <span className="hidden lg:inline">← Back to Projects</span>
          </button>

          <nav>
            <h3 className="text-lg font-semibold mb-2 uppercase text-gray-900">
              In This Project:
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/project/${id}/about`}
                  onClick={scrollToNextSection}
                  className={`font-semibold hover:underline ${
                    location.hash === `/project/${id}/about`
                      ? "text-blue-700 underline"
                      : "text-gray-600"
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
                    location.hash === `/project/${id}/articles`
                      ? "text-blue-700 underline"
                      : "text-gray-600"
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
                    location.hash === `/project/${id}/researchTeam`
                      ? "text-blue-700 underline"
                      : "text-gray-600"
                  }`}
                >
                  Research Team
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <main className="w-full lg:w-3/4">
        {/* DOST-PCHRD Officials Section */}
        <h1 className="text-3xl font-bold mb-6">DOST-PCHRD Officials</h1>
        {team.filter((member) => member.group === "DOST-PCHRD Official")
          .length === 0 ? (
          <p className="text-gray-600 mb-8">
            No DOST-PCHRD officials found for this project.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-8">
            {team
              .filter((member) => member.group === "DOST-PCHRD Official")
              .map((member) => (
                <div
                  key={member._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center"
                >
                  {member.image && (
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <img
                      src={urlFor(member.image).url()}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div> 
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                    <p className="text-sm text-gray-700 mt-4">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Research Team Section */}
        <h1 className="text-3xl font-bold mt-6 py-6">Research Team</h1>
        {team.filter((member) => member.group !== "DOST-PCHRD Official")
          .length === 0 ? (
          <p className="text-gray-600">
            No research team members found for this project.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-6">
            {team
              .filter((member) => member.group !== "DOST-PCHRD Official")
              .sort((a, b) => a.order - b.order)
              .map((member) => (
                <div key={member._id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center">
                  {member.image && (
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <img
                      src={urlFor(member.image).url()}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>                                 
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                    <p className="text-sm text-gray-700 mt-4">{member.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ResearchTeam;
