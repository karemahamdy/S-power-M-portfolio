import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="mt-">
        <div className="bg-red-500 rounded-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="rounded-full text-white bg-[var(--primary)] font-medium text-sm px-3 py-3 text-center">Contact Us</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink to="/home" className={({ isActive }) => `block py-2 px-3 md:p-0 rounded text-[var(--primary)] ${isActive ? 'active-link' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 md:p-0 rounded text-[var(--primary)] ${isActive ? 'active-link' : ''}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => `block py-2 px-3 md:p-0 rounded text-[var(--primary)] ${isActive ? 'active-link' : ''}`}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 md:p-0 rounded text-[var(--primary)] ${isActive ? 'active-link' : ''}`}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={({ isActive }) => `block py-2 px-3 md:p-0 rounded text-[var(--primary)] ${isActive ? 'active-link' : ''}`}>
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
