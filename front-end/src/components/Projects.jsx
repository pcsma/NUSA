import healthPH from '../assets/HealthPH.svg'
import gamotPH from '../assets/gamotPH.jpg'

const Projects = () => {
  return (
    
<div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gapt-4 m-4"> 

    <div className="row-span-2 col-start-1 row-start-1 lg:col-start-1 max-h-96 min-w-40 bg-white">
      <img className='w-full h-full object-cover' src={healthPH} alt="" />
    </div>
    <div className="row-span-2 col-start-1 row-start-2 lg:col-start-1 h-auto bg-white px-2">
      <h1 className='font-semibold text-2xl '>HealthPH</h1>
      <p className='text-gray-600 font-extralight'>Detecting emerging infectious disease trends in the Philippines using AI and social media analytics for early warning and data-driven health decisions.</p>
    </div>

    <div className="row-span-2 col-start-1 row-start-3 lg:col-start-2 lg:row-start-1 max-h-96 w-auto bg-white">
      <img className='w-full h-full object-cover' src={gamotPH} alt="" />
    </div>
    <div className="row-span-2 col-start-1 row-start-4 lg:col-start-2 lg:row-start-2 h-auto bg-white px-2">
      <h1 className='font-semibold text-2xl '>GamotPH</h1>
      <p className='text-gray-600 font-extralight'>Enhancing adverse drug reporting through AI-driven multilingual analysis for better public health monitoring.</p>
    </div>
</div>
    
  )
}

export default Projects