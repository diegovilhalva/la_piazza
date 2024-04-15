import banner4 from "../assets/banner4.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
const Hero = () => {

  useEffect(() => {
    Aos.init({
      offset:200,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    })
  },[])
  return (
    <section id="hero" className="w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-center gap-8" style={{backgroundImage:`url(${banner4})`}} >
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">Vida é uma combinação de Pizza & Magia</h1>
      <p data-aos="zoom-in">Em nossa pizzaria, celebramos heróis cotidianos com saborosas pizzas que alimentam corações e inspiram histórias memoráveis</p>
      <button data-aos="flip-up" className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:text-black">Peça já</button>
    </section>
  )
}

export default Hero