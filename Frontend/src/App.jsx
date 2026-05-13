import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
