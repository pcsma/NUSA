import { useEffect, useState } from "react";
import { client } from "../client";

const PolicySection = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "policy"] | order(order asc)`)
      .then(setPolicies)
      .catch(console.error);
  }, []);

  return (
    <section id="next-section" className="px-6 md:px-12 py-8">
      <h1 className="text-3xl font-bold mb-6">Website Policies</h1>
      {policies.map((item) => (
        <div key={item._id} className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h2>
          <p className="text-gray-800 leading-relaxed">{item.content}</p>
        </div>
      ))}
    </section>
  );
};

export default PolicySection;
