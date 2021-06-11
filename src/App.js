import React, { useEffect } from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Producers from "./components/Producers/Producers"
import Review from "./components/Review/Review"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"
import "aos/dist/aos.css"
import aos from "aos";

function App() {

  useEffect(()=>{
    aos.init();
    aos.refresh();
  },[])

  return (
    <div className="app">
      <Home />
      <Products/>
      <Producers />
      <Review />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
