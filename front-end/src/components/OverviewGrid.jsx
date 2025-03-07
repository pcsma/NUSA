import { useEffect, useState } from 'react'
import { client, urlFor } from "../client"

const OverviewGrid = () => {
    const [research, setResearch] = useState([]);

  useEffect(() => {
    const query = '*[_type == "research"]';
  
    client.fetch(query)
      .then((data) => {
        console.log("Fetched data:", data); // ✅ Log fetched data
        setResearch(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error); // ❌ Log errors
      });
  }, []);
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
        research.length < 4 ? `lg:grid-cols-${research.length}` : "lg:grid-cols-4"
        } 2xl:grid-cols-5 gap-6 p-6`}>
        {research.map((item, index)=>(
          <a key={item._id || index} href="">
            <div className="row-span-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105">
                {item.image?.asset ? (
                  <img src={urlFor(item.image).url()} alt={item.researchName} className="w-full h-auto" />
                ) : (
                  <p>No image available</p> 
                )}
                <h1 className='text-2xl'>{item.researchName}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti nobis atque at voluptate placeat doloremque ratione fugiat illo itaque, labore, odio doloribus est praesentium veniam culpa porro, repellendus maiores!</p>
            </div>
          </a>
       
        ))}
    </div>
  )
}

export default OverviewGrid
