import { useDarkMode } from "../DarkModeContext"
import contact1 from "../assets/contact1.jpg"
import { FaMapLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <section id="contact" className={`${darkMode ? 'dark bg-slate-900' : 'light bg-black'} w-full lg:px-20 px-10 py-10 lg:py-20  h-fit flex flex-col justify-center items-center bg-cover bg-center`} style={{ backgroundImage: `url(${contact1})` }}>
      <div className="lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500">
          <div id="icon-box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaMapLocationDot className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white  font-bold ">Nosso endereço</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">Visite-nos na Rua da Pizza,400, sabor inigualável aguarda você!</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">Ver no Mapa</button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500">
          <div id="icon-box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <MdEmail className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white  font-bold ">contato@lapiazza.com</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">
            Envie-nos um e-mail agora para pedir sua pizza deliciosa!</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">Escrever E-mail</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500">
          <div id="icon-box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <FaWhatsapp className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white  font-bold ">(41) 5555-5555</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">
            Converse conosco pelo WhatsApp para pedir sua pizza favorita!</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">Entrar em contato</button>
        </div>
      </div>

    </section>
  )
}

export default Contact