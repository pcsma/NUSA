import researchOne from '../assets/Research1.jpg'
import researchTwo from '../assets/Research2.jpg'
import researchThree from '../assets/Research3.jpg'
import researchFour from '../assets/Research4.jpg'
import researchFive from '../assets/Research5.jpg'
const Publication = () => {
  return (
    
    <div className="grid md:grid-cols-5 md:grid-rows-5 gap-4 m-6">
        <div className=" flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-40 mx-6 border-t-2">
          <div className="mx-6 my-4 w-full md:w-2/3">
            <h1  className="font-bold text-2xl md:text-3xl hover:text-sky-500">Research 1 Sample Title </h1>
            <h2 className=" w-auto font-semibold text-gray-500 hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima sed cum unde quibusdam, adipisci aut consequatur eligendi quas, nemo veniam? Commodi saepe quibusdam animi illum sit deleniti tempore quia.</h2>
          </div>
          <div className="hidden md:block h-40 md:h-auto my-2 mx-6">
            <img className='h-full' src={researchOne} alt="" />
          </div>
        </div>

        <div className=" flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-40 mx-6 border-t-2">
          <div className="mx-6 my-4 w-full md:w-2/3">
          <h1  className="font-bold text-2xl md:text-3xl hover:text-sky-500">Research 2 Sample Title </h1>
          <h2 className="font-semibold text-gray-500 hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima sed cum unde quibusdam, adipisci aut consequatur eligendi quas, nemo veniam? Commodi saepe quibusdam animi illum sit deleniti tempore quia.</h2>
          </div>
          <div className="hidden md:block h-40 md:h-auto my-2 mx-6">
            <img className='h-full' src={researchTwo} alt="" />
          </div>
        </div>
        <div className=" flex justify-between col-span-5 min-h-9 p-2 h-auto
        md:h-40 mx-6 border-t-2">
          <div className="mx-6 my-4 w-full md:w-2/3">
          <h1  className="font-bold text-2xl md:text-3xl hover:text-sky-500">Research 3 Sample Title </h1>
          <h2 className="font-semibold text-gray-500 hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima sed cum unde quibusdam, adipisci aut consequatur eligendi quas, nemo veniam? Commodi saepe quibusdam animi illum sit deleniti tempore quia.</h2>
          </div>
          <div className="hidden md:block h-40 md:h-auto my-2 mx-6">
            <img className='h-full' src={researchThree} alt="" />
          </div>
        </div>

        <div className=" flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-40 mx-6 border-t-2">
          <div className="mx-6 my-4 w-full md:w-2/3">
          <h1  className="font-bold text-2xl md:text-3xl hover:text-sky-500">Research 4 Sample Title </h1>
          <h2 className="font-semibold text-gray-500 hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima sed cum unde quibusdam, adipisci aut consequatur eligendi quas, nemo veniam? Commodi saepe quibusdam animi illum sit deleniti tempore quia.</h2>
          </div>
          <div className="hidden md:block h-40 md:h-auto my-2 mx-6">
            <img className='h-full' src={researchFour} alt="" />
          </div>
        </div>

        <div className=" flex justify-between col-span-5 min-h-9 p-2 h-auto md:h-40 mx-6 border-t-2">
          <div className="mx-6 my-4 w-full md:w-2/3">
          <h1  className="font-bold text-2xl md:text-3xl hover:text-sky-500">Research 5 Sample Title </h1>
          <h2 className="font-semibold text-gray-500 hover:text-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima sed cum unde quibusdam, adipisci aut consequatur eligendi quas, nemo veniam? Commodi saepe quibusdam animi illum sit deleniti tempore quia.</h2>
          </div>
          <div className="hidden md:block h-40 md:h-auto my-2 mx-6">
            <img className='h-full' src={researchFive} alt="" />
          </div>
        </div>
    </div>
    
  )
}

export default Publication
