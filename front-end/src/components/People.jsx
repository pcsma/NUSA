import React from 'react'
import profile from '../assets/profile.jpg'
import abisado from '../assets/teamPhotos/ABISADO.png'
import bautista from '../assets/teamPhotos/BAUTISTA.jpg'
import villacarlos from '../assets/teamPhotos/VILLACARLOS.png'
import salazar from '../assets/teamPhotos/SALAZAR.png'
import caluya from '../assets/teamPhotos/CALUYA.png'
import magtira from '../assets/teamPhotos/MAGTIRA.png'
import malolos from '../assets/teamPhotos/MALOLOS.jpg'
import barot from '../assets/teamPhotos/BAROT.png'
import bravo from '../assets/teamPhotos/BRAVO.png'

const People = () => {
  return (
    
<div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-7 gap-4 m-4 md:m-6">
    <div className="relative h-auto col-span-2 row-span-2 md:col-span-2 md:row-span-4 gap-2 bg-white md:h-144">
      <img className="h-full w-full object-cover z-0"src={abisado} alt=""/>
      <div className=" bg-white dark:bg-n-9 bg-opacity-70 dark:bg-opacity-70 backdrop-blur dark:backdrop-blur absolute bottom-0 h-1/6 w-full z-10 text-white flex flex-col justify-center items-center">
      <h1 className='text-2xl md:text-3xl'>Dr. Mideth B Abisado</h1>
      <h3>Project Lead</h3>
      </div>
    </div>
    <div className="h-auto md:row-span-2 md:col-start-3 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={salazar} alt="" />
    </div>
    <div className="h-auto md:row-span-2 md:col-start-4 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={bautista} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-1 md:col-start-3 md:row-start-3 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={caluya} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-2 md:col-start-4 md:row-start-3 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={villacarlos} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-1 md:row-start-5 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={magtira} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-2 md:row-start-5 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={malolos} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-1 md:col-start-3 md:row-start-5 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={barot} alt="" />
    </div>
    <div className="h-auto row-span-1 md:row-span-2 col-start-2 md:col-start-4 md:row-start-5 gap-2 bg-white">
      <img className="h-full w-full object-cover"src={bravo} alt="" />  
    </div>
</div>
    
  )
}

export default People
