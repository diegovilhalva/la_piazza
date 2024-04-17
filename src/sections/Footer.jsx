import { FaFacebook, FaInstagram, FaYoutube, FaArrowUp, FaMoon, FaSun } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { Link } from "react-scroll"
import { useDarkMode } from "../DarkModeContext"
const Footer = () => {

  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <>
    <footer className={`${darkMode ? 'dark bg-gray-900' : 'light bg-black'} w-full h-fit lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}>
      <h1 className="text-white font-bold text-5xl">La <span className="text-orange-500 italic">Piazza</span>
      </h1>
      <p className="text-xl text-slate-100 text-center">Delícias assadas com amor, cada mordida uma experiência única</p>
      <div id="social-icons" className="flex justify-center item-center gap-4">
        <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white
            hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <FaFacebook className="w-[25px] h-[25px]"/>
        </div>
        <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white
            hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <BsTwitterX className="w-[25px] h-[25px]"/>
        </div>
        <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white
            hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <FaInstagram className="w-[25px] h-[25px]"/>
        </div>
        <div id="icon-box" className="p-3 rounded-full bg-orange-500 hover:bg-white text-white
            hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <FaYoutube className="w-[25px] h-[25px]"/>
        </div>
        
      </div>
    </footer>
    <div>
      <button onClick={toggleDarkMode} className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6  bottom-6">
      {darkMode ? <FaMoon className="text-black" size={22}/> : <FaSun className="text-black" size={22}/>}
      </button>
    </div>
    <div id="icon-box" className="bg-orange-500 text-black p-3 rounded-full hover:bg-white
    cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
      <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="text-black" size={28} />
      </Link>
    </div>
    </>
  )
}

export default Footer