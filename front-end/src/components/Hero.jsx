const Hero = ({ bgImage, title, description, person }) => {
  console.log("Hero image URL:", person?.image);
  return (
    <div className="relative w-full h-[75vh]">
      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-12 text-white">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-end gap-8">
          {person?.image && (
            <img
              src={person.image}
              alt={person.name}
              className="w-36 h-36 md:w-72 md:h-72 object-cover rounded-md shadow-lg"
            />
          )}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              {person?.name || title}
            </h1>
            <p className="text-lg md:text-2xl mt-2">
              {person?.role || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
