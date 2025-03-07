import { FaArrowTurnDown } from 'react-icons/fa6'
import bg from '../assets/bg2.jpg'
const Hero = () => {
  return (
    <div className="w-full h-screen">
        <img className='scroll-smooth top-0 left-0 w-full h-screen object-cover' src={bg} alt="" />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
        <div className=" absolute top-16 w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                <h1 className="mb-16 mt-16 text-5xl tracking-wide md:text-6xl lg:mt-16 lg:text-7xl font-sans font-semibold">
                    Philippine Center for Social Media Analytics
                </h1> 
                <div className=" bottom-0 flex flex-col items-center justify-center pt-10">
                  <h2 className='pb-10 text-2xl tracking-wide mt-16 font-sans font-semibold'>Explore More</h2>
                  <FaArrowTurnDown className=' text-white' size={50}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
