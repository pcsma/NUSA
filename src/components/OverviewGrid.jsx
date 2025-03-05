import researchOne from '../assets/Research1.jpg'
import researchTwo from '../assets/Research2.jpg'
import researchThree from '../assets/Research3.jpg'
import researchFour from '../assets/Research4.jpg'
import researchFive from '../assets/Research5.jpg'
const OverviewGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
        <div className="row-span-2">
            <img src={researchOne} alt="Research 1 IMG" />
            <h2>Research 1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti nobis atque at voluptate placeat doloremque ratione fugiat illo itaque, labore, odio doloribus est praesentium veniam culpa porro, repellendus maiores!</p>
        </div>
        <div className="row-span-2">
            <img src={researchTwo} alt="" />
            <h2>Research 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde dicta eius eligendi consequuntur ea? Voluptates natus, velit consequuntur, non quas quasi placeat blanditiis saepe minus, sapiente accusantium iste maiores officiis.</p>
        </div>
        <div className="row-span-2">
            <img src={researchThree} alt="" />
            <h2>Research 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque ducimus, deleniti quos distinctio minus expedita placeat error neque amet quisquam facere temporibus laborum tempore quia magnam sequi aperiam. Distinctio.</p>
        </div>
        <div className="row-span-2">
            <img src={researchFour} alt="" />
            <h2>Research 4</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum cum sit nesciunt dolor minima et porro dignissimos dolore tempore nostrum eos, ratione aliquid cumque. Voluptates odit rem est nesciunt mollitia.</p>
        </div>
        <div className="row-span-2">
            <img src={researchFive} alt="" />
            <h2>Research 5</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam quae accusantium animi illum ad necessitatibus exercitationem. Omnis voluptatem quos facilis amet provident dolor at, nam nemo corrupti dicta quia?</p>
        </div>
    </div>
  )
}

export default OverviewGrid
