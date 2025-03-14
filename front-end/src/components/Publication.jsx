import { useEffect, useState } from 'react'
import { client, urlFor } from "../client"

const Publication = () => {
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    const query = '*[_type == "publication"]';
  
    client.fetch(query)
      .then((data) => {
        console.log("Fetched data:", data); 
        setPublication(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error); 
      });
  }, []);
  return (
    
    <div className={`grid grid-cols-1 grid-rows-${publication.length} m-6`}>
      {publication.map((item, index)=>(
        <a key={item._id || index} href="#">
          <div className="relative">
          <div className="absolute top-0 left-0 w-full border-t-2 border-gray-300">
          </div>
          <div key={item._id || index} className="relative flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-auto mx-6 cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:text-sky-600">
            <div className="mx-6 my-4 w-full md:w-2/3">
              <h1  className="font-bold text-2xl md:text-3xl">{item.publicationName}</h1>
              <h2 className=" w-auto font-semibold">{item.publicationDescription}</h2>
            </div>
            <div className="hidden md:block h-40 md:h-44 my-2 mx-6">
              <img className='h-full' src={urlFor(item.image).url()} alt="" />
            </div>
          </div>
          </div>
        </a>
        ))}
    </div>  
    
  )
}

export default Publication
