import AboutUsHome from "../components/AboutUsHome"
import CardIcon from "../components/CardIcon"
import FloatingButton from "../components/FloatingButton"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ImageGallery from "../components/ImageGallery"
import MainMenu from "../components/MainMenu"
// import Testimonials from "../components/Testimonials"
import ReviewComponent from "../components/UlasanCustomer"

const Home = () => {
  return(
    <>
      <Header/>
      <HeroSection/>
      <CardIcon/>
      <AboutUsHome/>
      <MainMenu/>
      <ImageGallery/>
      <ReviewComponent/>
      <FloatingButton/>
      <Footer/>
    </>
  )
}

export default Home