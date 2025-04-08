import Navbar from './Components/Navbar'
import '../src/global.css'
import Banner from './Components/Banner'
import FlashSales from './Components/FlashSales'
import Browsectg from './Components/Browsectg'
import Sellingproduct from './Components/Sellingproduct'
import Categories from './Components/Categories'
import ExploreProducts from './Components/ExploreProducts'
import NewArrival from './Components/NewArrival'
import Service from './Components/Service'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <FlashSales/>
     <Browsectg/>
     <Sellingproduct/>
     <Categories/>
     <ExploreProducts/>
     <NewArrival/>
     <Service/>
     <Footer/>
    </>
  )
}

export default App
