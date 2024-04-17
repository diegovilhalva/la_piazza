
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { Link } from "react-scroll"
import { FaXmark, FaBars } from "react-icons/fa6"
import { useDarkMode } from "../DarkModeContext"
import { useState } from "react"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, toggledarkMode } = useDarkMode()

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }
  const closemenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link: 'Home',
      path: 'home'
    },
    {
      link: 'Sobre',
      path: 'about'
    },
    {
      link: 'Pizzas',
      path: 'pizza'
    },
    {
      link: 'Dúvidas',
      path: 'faq'
    },
    {
      link: 'Contato',
      path: 'contact'
    }
  ]
  return (
    <nav className={`${darkMode ? 'dark bg-gray-800' : 'light bg-black'} w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}>
        <h1 className="text-white font-bold lg:text-5xl text-3xl">La <span className="italic text-orange-500">Piazza</span></h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({link,path}) => (
            <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 
            rounded-lg hover:bg-orange-500 dark:hover:text-black hover:text-white" to={path} spy={true} offset={-100} smooth={true}>
              {link}
            </Link>
          ))}
        </ul>
        <div id="header-icons" className="lg:flex  hidden justify-center items-center gap-8
        text-white ">
          <FaSearch className="w-[22px] h-[22px]  transform hover:scale-125 transition-transform duration-300 cursor-pointer"/>
          <IoPerson className="w-[22px] h-[22px]  transform hover:scale-125 transition-transform duration-300 cursor-pointer"/>
          <FaHeart className="w-[22px] h-[22px]  transform hover:scale-125 transition-transform duration-300 cursor-pointer"/>
          <div className="relative">
              <FaShoppingCart className="w-[22px] h-[22px] transform hover:scale-125
             transition-transform duration-300 cursor-pointer "/>
             <div className="bg-orange-500 dark:bg-white dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] -right-[20px] text-sm font-bold   ">
                2
             </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:hidden mt-2" onClick={toggleMenu}>
              <div>
                 {isMenuOpen ? <FaXmark className="text-white text-3xl cursor-pointer " /> : <FaBars className="text-white text-3xl cursor-pointer " />}
              </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4  absolute top-[80px] 
        left-0`} onClick={closemenu}>
            <ul className="flex flex-col justify-center items-center gap-2 w-full">
              {navItems.map(({link,path}) => (
                <Link key={path} className="text-white font-semibold p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))}
            </ul>
          </div>
    </nav>
  )
}

export default Header