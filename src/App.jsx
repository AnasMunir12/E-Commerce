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
import ConfirmOrder from './Pages/ConfirmOrder'
import SellingProductDT from './Components/Productdetail/SellingProductDT'
import ExploreDT from './Components/Productdetail/ExploreDT'
import AccountDetail from './Pages/AccountDetail'
// import EmailVerification from './Components/Signup/EmailVerfication'

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
        <Route path='/selling_product/:id' element={<SellingProductDT />} />
        <Route path='/explore_product/:id' element={<ExploreDT />} />
        <Route path='/cart' element={<AddtoCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orderConfirmation' element={<ConfirmOrder />} />
        <Route path='/account' element={<AccountDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/verify-email/:token' element={<EmailVerification />} /> */}
        <Route path='/login' element={<Login />} />
      </Routes>
       { !HideNavbar &&  <Footer />}
    </>
  )
}

export default App
