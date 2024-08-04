
import './App.css'
// import targetIcon from "./assets/images/target (1).svg";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from "./pages/About/About.jsx"



function App() {
  return (
    <BrowserRouter>
      <div className=''>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;