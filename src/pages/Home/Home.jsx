import Nav from '../../components/Nav.jsx';
import Hero from "../../pages/Home/Hero.jsx"
import Intro from "../../pages/Home/Intro.jsx"
import Contact from "../../pages/Home/Contact.jsx"
import Clients from "../../pages/Home/Clients.jsx"
import Footer from "../../pages/Home/Footer.jsx"


function Home () {
  return (
    <>
    
    <div className='container-box grid gap-6'>
        <Nav/>
        <Hero/>
        <Intro/>
        <hr></hr>
        <Clients/>
        <hr></hr>
    </div>
        <Contact/>
        <Footer/>
  </>
  )
}
export default Home