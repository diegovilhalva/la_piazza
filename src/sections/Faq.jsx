import { useEffect } from "react"
import { useDarkMode } from "../DarkModeContext"
import faqimg1 from "../assets/faq1.jpg"
import faqimg2 from "../assets/faq2.jpg"
import faqimg3 from "../assets/faq3.jpg"
import faqimg4 from "../assets/faq4.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
import { Accordion } from "flowbite-react"

const Faq = () => {
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
    <section id="faq" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 grid  lg:grid-cols-2 grid-cols-1 justify-center items-start gap-14`}>
      <div id="left" className="flex flex-col justify-center items-center gap-12 ">
        <h1 data-aos="zoom-in" className="text-6xl text-black font-bold text-center dark:text-white">Perguntas Frequentes</h1>
        <div data-aos="slide-up" className="w-full">

          <Accordion className="flex flex-col  justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black">Quais são os horários de funcionamento?</Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">

                  Estamos abertos sete dias por semana! Nosso horário de funcionamento é das 11h às 22h, de segunda a domingo.
                </p>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black">Vocês oferecem serviços de entrega?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Sim, oferecemos entrega em um raio de 10 Km. Há uma taxa de entrega de R$3, e pedidos acima de R$30 têm direito a entrega grátis.
                </p>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black">
                Posso fazer um pedido online?</Accordion.Title>
              <Accordion.Content>
                <p className=" text-gray-500 dark:text-gray-400">
                  Aceitamos todos os principais cartões de crédito,pix,dinheiro na entrega e plataformas populares de pagamento online como PayPal.
                </p>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel >
              <Accordion.Title className="border-none text-black">Vocês têm opções de pizza sem glúten ou veganas?</Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">
                  Sim, oferecemos tanto opções de massa sem glúten quanto de queijo vegano. Você pode personalizar sua pizza de acordo com suas preferências alimentares.
                </p>

              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black">
                Como posso personalizar minha pizza?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">
                  Você pode personalizar totalmente sua pizza escolhendo entre uma variedade de massas, molhos, queijos e coberturas. Crie a pizza perfeita para o seu paladar!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black">
                Vocês têm alguma promoção ou desconto atualmente?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">
                  Confira nossa página de "Ofertas Especiais" no site para as últimas promoções e descontos. Também oferecemos ofertas exclusivas para os assinantes da nossa newsletter.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <button data-aos="flip-up" className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full  font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ">Entrar em contato</button>
      </div>
      <div id="img-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
          <img data-aos="zoom-in" src={faqimg1} className="w-[400px] h-[400px] object-cover rounded-xl" alt={'pizza image'} />
          <img data-aos="zoom-in" src={faqimg2} className="w-[400px] h-[400px] object-cover rounded-xl" alt={'pizza image'} />
          <img data-aos="zoom-in" src={faqimg3} className="w-[400px] h-[400px] object-cover rounded-xl" alt={'pizza image'} />
          <img data-aos="zoom-in" src={faqimg4} className="w-[400px] h-[400px] object-cover rounded-xl" alt={'pizza image'} />
      </div>
    </section>
  )
}

export default Faq