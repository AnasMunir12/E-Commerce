import { Routes, Route , useLocation } from 'react-router-dom'
import '../src/global.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Signup from './Pages/Signup'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import ProductDt from './Components/Productdetail/ProductDt'
import ScrollToTop from './Components/ScrollToTop'
import AddtoCart from './Pages/AddtoCart'
import Checkout from './Pages/Checkout'

function App() {
  const location = useLocation();
  const HideNavbar = location.pathname === "/login" || location.pathname === "/signup"
  return (
    <>
    <ScrollToTop/>
       { !HideNavbar &&  <Navbar /> }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDt />} />
        <Route path='/cart' element={<AddtoCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
       { !HideNavbar &&  <Footer />}
    </>
  )
}

export default App
