import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';

const Projects = () => {
  const [project, setProject] = useState([]);
  
    useEffect(() => {
      const query = '*[_type == "project"]';
    
      client.fetch(query)
        .then((data) => {
          console.log("Fetched data:", data); 
          setProject(data);
        })
        .catch((error) => {
          console.error("Sanity fetch error:", error); 
        });
    }, []);
  return (
    
    <div className={`grid grid-cols-1 md:grid-cols-2 ${
      project.length < 4 ? `lg:grid-cols-${project.length} xl:grid-cols-${project.length} 2xl:grid-cols-${project.length}` : " xl:grid-cols-3"
      }  gap-6 p-6`}>
      {project.map((item, index)=>(
        <a key={item._id || index} href="">
          <div className="row-span-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:text-sky-600">
              {item.image?.asset ? (
                <img src={urlFor(item.image).url()} alt={item.projectName} className="w-full h-96 rounded object-cover" />
              ) : (
                <p>No image available</p> 
              )}
              <h1 className='text-2xl'>{item.projectName}</h1>
              <p>{item.projectDescription}</p>
          </div>
        </a>
      ))}
  </div>
  )
}

export default Projects