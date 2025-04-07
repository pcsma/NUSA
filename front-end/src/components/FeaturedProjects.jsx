import { useEffect, useState } from 'react'
import { client, urlFor } from "../client"
import { useNavigate } from 'react-router-dom';

const FeaturedProjects = () => {
    const [research, setResearch] = useState([]);
    const navigate = useNavigate();
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

  useEffect(() => {
    const query = `*[_type == "featuredProject" && featured == true]{
      _id, 
      title,
      slug,
      description,
      image 
    }`;
    
  
    client.fetch(query)
      .then((data) => { 
        setResearch(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error); 
      });
  }, []);
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${
        research.length < 4 ? `lg:grid-cols-${research.length} xl:grid-cols-${research.length} 2xl:grid-cols-${research.length}` : " xl:grid-cols-3"
        }  gap-6 p-6`}>
        {research.map((item, index)=>(
            <div key={item._id || index}
            onClick={() => {scrollToTop();navigate(`/project/${item.slug.current}`)}}
            className="row-span-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:text-sky-600 cursor-pointer">
                {item.image?.asset ? (
                  <img src={urlFor(item.image).url()} alt={item.featuredProjectName} className="w-full h-80 rounded object-cover" />
                ) : (
                  <p>No image available</p> 
                )}
                <h1 className='text-2xl py-4'>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default FeaturedProjects
