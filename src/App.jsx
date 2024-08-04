
import './App.css'
// import targetIcon from "./assets/images/target (1).svg";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx"
import Header from "./components/Header.jsx"
import Contact from './pages/Contact/Contact.jsx';



function App() {
  return (
    <BrowserRouter>
      <div className=''>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;