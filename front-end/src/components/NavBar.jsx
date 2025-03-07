import { FaSearch, FaUser } from "react-icons/fa"
import logo from "../assets/pcsma.png"
import { TiThMenu } from "react-icons/ti"
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import nulogo from "../assets/nulogo.png"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  };
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.document.documentElement.scrollTop <= 20)
    };
    window.addEventListener('scroll', scrollHandler)
    scrollHandler();
    return ()=>{
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [top]);

  return (

        <div className={`fixed top-0 z-50 w-full flex justify-between py-1 px-4 items-center ${!top && 'bg-black dark:bg-n-5 bg-opacity-80 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur'}`}> 
            <div className="flex">
              <img className="cursor-pointer size-[4rem] md:size-[5rem] z-20 m-3" src={nulogo} alt="" />
              <img className="cursor-pointer size-[5rem] md:size-[7rem] z-20" src={logo} alt="logo" />
            </div>
            <TiThMenu onClick={handleNav} className="z-20 text-white md:hidden cursor-pointer" size={25} />
            <div className="hidden md:flex m-8 items-center justify-between flex-row gap-8 text-2xl cursor-pointer">
              <FaUser className="z-20 text-white cursor-pointer"/>
              <FaSearch className="z-20 text-white cursor-pointer"/>
              <TiThMenu onClick={handleNav} className="z-20 text-white cursor-pointer" />
            </div>  
            <div className={nav ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-n-11/90 px-4 py-7 flex-col z-10" : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className="flex flex-col w-full h-full items-center justify-center" onClick={handleNav}>
              <Link to='/'>
                <li className="font-bold text-1xl p-4 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="./publication">
                <li className="font-bold text-1xl p-4 cursor-pointer">Publications</li>
              </Link>
              <Link to="./people">
                <li className="font-bold text-1xl p-4 cursor-pointer">
                People</li>
              </Link>
              <Link to="./projects">
                <li className="font-bold text-1xl p-4 cursor-pointer">Projects</li>
              </Link>
              <Link to="./articles">
                <li className="font-bold text-1xl p-4 cursor-pointer">Articles</li>
              </Link>
              <Link to="./events">
                <li className="font-bold text-1xl p-4 cursor-pointer">Events</li>
              </Link>
              <Link to="./tools">
                <li className="font-bold text-1xl p-4 cursor-pointer">Tools</li>
              </Link>
              <Link to="./data">
                <li className="font-bold text-1xl p-4 cursor-pointer">Data</li>
              </Link>
              <Link to="./FAQ">
                <li className="font-bold text-1xl p-4 cursor-pointer">FAQ</li>
              </Link>
              <Link to="./policy">
                <li className="font-bold text-1xl p-4 cursor-pointer">Policy</li>
              </Link>
              </ul>
        </div>
        </div>
    
    
  )
}

export default NavBar
