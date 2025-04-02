import { FaArrowTurnDown } from 'react-icons/fa6';

const Hero = ({ bgImage, title, description }) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      const sectionTop = nextSection.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPosition = sectionTop - viewportHeight / 2 + 250;
      
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen">
        <img className="absolute top-0 left-0 w-full h-screen object-cover" src={bgImage} alt="Project Background" />
        <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-16 w-full h-full flex flex-col justify-center text-white px-6 sm:px-12">
            <div className="max-w-[1100px] mx-auto">
                <h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-wide">
                    {title}
                </h1> 

                {description && (
                    <p className="mb-6 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-200">
                        {description}
                    </p>
                )}

                <div 
                  className="flex flex-col items-center pt-4 cursor-pointer group"
                  onClick={handleScroll}
                >
                  <h2 className="pb-2 text-xl md:text-2xl font-semibold transition duration-300 group-hover:text-blue-400">
                    Explore More
                  </h2>
                  <FaArrowTurnDown 
                    className="text-white transition duration-300 group-hover:translate-y-1 group-hover:text-blue-400" 
                    size={50}
                  />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
