import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import about1 from "../assets/about1.jpg"
import { useDarkMode } from "../DarkModeContext"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
  }, [])
  const {darkMode,toggleDarkMode} = useDarkMode()
  return (
    <>
      <section id="about" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}>
        <div data-aos="zoom-in" data-aos-delay="200" className="border-[4px]  border-orange-600 dark:border-orange-400 p-14 flex  flex-col justify-center items-center gap-6 rounded-lg hover:bg-orange-100 cursor-point">
          <img src={icon1} alt="pizza icon" className="w-[80px] h-[80px] transform hover:scale-105
          transition-transform duration-300 cursor-pointer" />
          <h1 className="text-black text-2xl font-lg  text-center">Os Melhores Sabores</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="border-[4px]  border-orange-600 dark:border-orange-400 p-14 flex  flex-col justify-center items-center gap-6 rounded-lg hover:bg-orange-100 cursor-point">
          <img src={icon2} alt="pizza icon" className="w-[80px] h-[80px] transform hover:scale-105
          transition-transform duration-300 cursor-pointer" />
          <h1 className="text-black text-2xl font-lg  text-center">Ingedientes Organicos</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="border-[4px]  border-orange-600 dark:border-orange-400 p-14 flex  flex-col justify-center items-center gap-6 rounded-lg hover:bg-orange-100 cursor-point">
          <img src={icon3} alt="pizza icon" className="w-[80px] h-[80px] transform hover:scale-105
          transition-transform duration-300 cursor-pointer" />
          <h1 className="text-black text-2xl font-lg  text-center">Agilidade na Produção</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="border-[4px]  border-orange-600 dark:border-orange-400 p-14 flex  flex-col justify-center items-center gap-6 rounded-lg hover:bg-orange-100 cursor-point">
          <img src={icon4} alt="pizza icon" className="w-[80px] h-[80px] transform hover:scale-105
          transition-transform duration-300 cursor-pointer" />
          <h1 className="text-black text-2xl font-lg  text-center">Massas Caseiras</h1>
        </div>
      </section>
      <section className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit  grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
          <img src={about1} alt="about image" className="lg:w-[800px] lg:h-[600px] rounded-xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <h1 data-aos="zoom-in" className="text-2xl text-black dark:text-white font-semibold text-center">Bem vindo a</h1>
            <h1 data-aos="zoom-in" className="text-6xl text-black dark:text-white font-bold text-center">La Piazza Pizzaria</h1>
            <p data-aos="zoom-in" className="text-xl text-slate-800 dark:text-slate-100 text-center">Na nossa pizzaria, cada fatia é uma experiência única, preparada com ingredientes frescos e paixão, para satisfazer os mais exigentes paladares</p>
            <button data-aos="flip-up" className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:text-black">Peça já</button>
        </div>
      </section>
    </>
  )
}

export default About