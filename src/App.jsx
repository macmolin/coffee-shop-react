
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Shop from './views/Shop';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
      <div className="">
        <nav className="">
          <Link to="/" className="">Inicio</Link>
          <Link to="/about" className="">Acerca</Link>
          <Link to="/contact" className="">Contacto</Link>
          <Link to="/shop" className="">Tienda</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
