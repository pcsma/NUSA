import { useEffect, useState } from "react";
import { client } from "../client";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const query = `*[_type == "faq"] | order(order asc){
      _id,
      question,
      answer
    }`;

    client.fetch(query).then(setFaqs).catch(console.error);
  }, []);

  return (
    <div id="next-section" className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq._id} className="mb-4 border-b pb-4">
          <h2 className="text-xl font-semibold text-blue-700">{faq.question}</h2>
          <p className="text-gray-700 mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
