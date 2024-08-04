import { NavLink } from "react-router-dom";
import IntroImage from "../../assets/images/Layer 2.png";
function Footer () {
  return (

<footer className="bg-secondary">
    <div className="flex flex-row justify-between p-20">
    <div className="flex flex-col space-y-3 font-medium">
        <img src={IntroImage} alt="intro" className="w-[70%]"/>
        <p className="text-white">All rights Reserved | 2023</p>
    </div>
    

    <ul className=" font-light space-y-5">
          
              <li>
                <NavLink to="/about" className={({ isActive }) => `block text-white ${isActive ? 'active-link' : ''}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => `block text-white ${isActive ? 'active-link' : ''}`}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `block text-white ${isActive ? 'active-link' : ''}`}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={({ isActive }) => `block text-white ${isActive ? 'active-link' : ''}`}>
                  Portfolio
                </NavLink>
              </li>
            </ul>
    </div>

  
</footer>
  )}

  export default Footer