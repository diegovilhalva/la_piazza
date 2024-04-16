import { useEffect } from "react"
import { useDarkMode } from "../DarkModeContext"
import { pizza } from "../components/export"
import Aos from "aos"
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const TopRated = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
  }, [])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };

  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <section id="pizza" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} h-fit w-full lg:px-20 px-10  lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}>
      <h1 data-aos="zoom-in" className="text-6xl text-black dark:text-white font-bold text-center">Pizzas Populares</h1>
      <p data-aos="zoom-in" className="text-xl text-black dark:text-slate-50">Descubra o delicioso mundo das nossas pizzas populares! Das clássicas às mais criativas, cada fatia é uma experiência única de sabor. Junte-se a nós e desfrute de uma explosão de sabores em cada mordida!</p>
      <div data-aos="slide-up" className="lg:w-[90%] w-full">
        <Slider {...settings} >
        {
          pizza.map((item, index) => (
            <div id="product-box" key={index} className="bg-black dark:bg-gray-800 p-8  flex flex-col justify-center items-center gap-4 rounded-lg">
              <img src={item.image} alt={item.title} className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
              <h1 className="text-white text-center text-2xl font-bold dark:text-white">{item.title}</h1>
              <h1 className="text-orange-600 font-bold text-3xl">{item.price}</h1>
              <p className="text-md text-white text-center">{item.para}</p>
              <button className="font-semibold bg-orange-500 text-white px-8 py-3 rounded-full dark:hover:bg-white dark:hover:text-black ">Pedir</button>
            </div>
          ))
        }
        </Slider>
      </div>
    </section>
  )
}

export default TopRated