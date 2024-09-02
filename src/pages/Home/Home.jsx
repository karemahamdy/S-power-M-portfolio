import Nav from '../../components/Nav.jsx';
import Hero from "../../pages/Home/Hero.jsx"
import Intro from "../../pages/Home/Intro.jsx"
import Portfolio from "../Home/Portfolio.jsx"
import Contact from "../../pages/Home/Contact.jsx"
import Clients from "../../pages/Home/Clients.jsx"
import Footer from "../../pages/Home/Footer.jsx"


function Home() {
  return (
    <>

      <div className='bg'>
        <Nav />
        <Hero />
        </div>
      <div className='container-box grid gap-6'>
        <Intro />
        <hr></hr>
        <Portfolio/>
        <hr></hr>
        <Clients />
        <hr></hr>
      </div>

      <Contact />
      <Footer />
    </>
  )
}
export default Home