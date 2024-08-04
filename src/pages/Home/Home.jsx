import Nav from '../../components/Nav.jsx';
import Hero from "../../pages/Home/Hero.jsx"
import Intro from "../../pages/Home/Intro.jsx"
import Contact from "../../pages/Home/Contact.jsx"
import Clients from "../../pages/Home/Clients.jsx"

function Home () {
  return (
    <div className='container-box grid gap-6'>
      <div className='header'></div>
        <Nav/>
        <Hero/>
        <Intro/>
        <hr></hr>
        <Clients/>
        <Contact/>
        <hr></hr>
    </div>
  )
}
export default Home