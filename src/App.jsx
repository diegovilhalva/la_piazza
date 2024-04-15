import About from "./sections/About"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import TopRated from "./sections/TopRated"
import BestSellers from "./sections/BestSellers"
import Faq from "./sections/Faq"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { DarkModeProvider } from "./DarkModeContext"


const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSellers />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  )
}

export default App