import { Link } from "react-router-dom";
import logo from "../assets/pcsma.png";
import nulogo from "../assets/nulogo.png";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
  return (
    <footer className="px-4 divide-y bg-gray-900 text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 flex items-center space-x-4">
        <Link onClick={scrollToTop} to="https://national-u.edu.ph/">
          <img className="size-[4rem] md:size-[5rem]" src={nulogo} alt="NU Logo" />
        </Link>
        <Link onClick={scrollToTop} to="">
          <img className="size-[5rem] md:size-[7rem]" src={logo} alt="PCSMA Logo" />
        </Link>
        </div>
        
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            {/* <h3 className="tracking-wide uppercase text-gray-100">Product</h3> */}
            <ul className="space-y-1">
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="">Overview</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/publication">Publications</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/people">People</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/projects">Projects</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            {/* <h3 className="tracking-wide uppercase text-gray-100">Company</h3> */}
            <ul className="space-y-1">
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/faq">FAQ</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/policy">Policy</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            {/* <h3 className="uppercase text-gray-100">Developers</h3> */}
            <ul className="space-y-1">
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/tools">Tools</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/data">Data</Link>
              </li>
              <li>
                <Link onClick={scrollToTop} className="text-gray-100 hover:text-gray-300" to="/events">Events</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            {/* <div className="uppercase text-gray-100">Social Media</div> */}
            <div className="flex space-x-3">
              <a href="#" title="Facebook" className="p-1 text-gray-100 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a href="#" title="Twitter" className="p-1 text-gray-100 hover:text-gray-300">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a href="#" title="Instagram" className="p-1 text-gray-100 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-100">© 2023 Philippine Center for Social Media Analytics. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
