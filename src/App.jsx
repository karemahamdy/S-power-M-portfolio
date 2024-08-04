import './App.css'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx"
import Header from "./components/Header.jsx"
import Contact from './pages/Contact/Contact.jsx';
import Services from './pages/Services/Services.jsx';
import PageNotFound from "./components/PageNotFound.jsx"


function App() {
  return (
    <BrowserRouter>
      <div className=''>
      <Header/>
        <Routes>
        <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;