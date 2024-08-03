
import './App.css'
// import targetIcon from "./assets/images/target (1).svg";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className=''>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;