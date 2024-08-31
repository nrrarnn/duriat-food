import AboutUsHome from "../components/AboutUsHome"
import CardIcon from "../components/CardIcon"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import MainMenu from "../components/MainMenu"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return(
    <>
      <Header/>
      <HeroSection/>
      <CardIcon/>
      <AboutUsHome/>
      <MainMenu/>
      <Testimonials/>
    </>
  )
}

export default Home