import { FaSearch, FaUser } from "react-icons/fa"
import logo from "../assets/pcsma.png"
import { TiThMenu } from "react-icons/ti"
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import nulogo from "../assets/nulogo.png"
import bagongPilipinas from "../assets/BAGONG-PILIPINAS-LOGO.png"
import dostPchrd from "../assets/DOST-PCHRD-LOGO.png"

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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

    <div className={`fixed top-0 z-50 w-full flex justify-between py-1 px-4 items-center transition-all duration-300 ${!top ? 'bg-black dark:bg-n-5 bg-opacity-80 dark:bg-opacity-50 backdrop-blur-lg' : 'bg-transparent'}`}>

            <div className="flex">
              <Link onClick={scrollToTop} to="https://national-u.edu.ph/">
                <img className="cursor-pointer size-[4rem] md:size-[5rem] z-20 m-3" src={nulogo} alt="" />
              </Link>
              <Link onClick={scrollToTop} to="/">
                <img className="cursor-pointer size-[5rem] md:size-[7rem] z-20" src={logo} alt="logo" />
              </Link>
            </div>
            <TiThMenu onClick={handleNav} className="z-20 text-white md:hidden cursor-pointer" size={25} />
            <div className="hidden md:flex m-8 items-center justify-between flex-row gap-8 text-2xl cursor-pointer">
              {/* <FaUser className="z-20 text-white cursor-pointer"/>
              <FaSearch className="z-20 text-white cursor-pointer"/> */}
              <TiThMenu onClick={handleNav} className="z-20 text-white cursor-pointer" />
            </div>  
            <div className={`fixed top-0 left-0 w-full h-screen bg-n-11/90 px-4 py-7 flex flex-col z-50 transform transition-transform duration-300 text-white ${nav ? "translate-x-0" : "-translate-x-full"}`}>

            <ul className="flex flex-col w-full h-full items-center justify-center" onClick={handleNav}>
              <Link onClick={scrollToTop} to='/'>
                <li className="font-bold text-1xl p-4 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link onClick={scrollToTop} to="./publication">
                <li className="font-bold text-1xl p-4 cursor-pointer">Publications</li>
              </Link>
              <Link onClick={scrollToTop} to="./people">
                <li className="font-bold text-1xl p-4 cursor-pointer">
                People</li>
              </Link>
              <Link onClick={scrollToTop} to="./projects">
                <li className="font-bold text-1xl p-4 cursor-pointer">Projects</li>
              </Link>
              <Link onClick={scrollToTop} to="./FAQ">
                <li className="font-bold text-1xl p-4 cursor-pointer">FAQ</li>
              </Link>
              <Link onClick={scrollToTop} to="./policy">
                <li className="font-bold text-1xl p-4 cursor-pointer">Policy</li>
              </Link>
              </ul>
        </div>
        </div>
    
    
  )
}

export default NavBar
