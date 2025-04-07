import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = `*[_type == "featuredProject"]{
      _id, 
      title,
      slug,
      description,
      image 
    }`;
    

    client.fetch(query)
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="next-section"
      className={`grid grid-cols-1 md:grid-cols-2 ${
        projects.length < 4
          ? `lg:grid-cols-${projects.length} xl:grid-cols-${projects.length} 2xl:grid-cols-${projects.length}`
          : 'xl:grid-cols-3'
      } gap-6 p-6`}
    >
      {projects.map((item, index) => (
        <div
          key={item._id || index}
          onClick={() => {
            scrollToTop();
            navigate(`/project/${item.slug.current}`);
          }}
          className="row-span-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:text-sky-600 cursor-pointer"
        >
          {item.image?.asset ? (
            <img
              src={urlFor(item.image).url()}
              alt={item.title}
              className="w-full h-80 rounded object-cover"
            />
          ) : (
            <p>No image available</p>
          )}
          <h1 className="text-2xl py-4">{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
