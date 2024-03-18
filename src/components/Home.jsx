import React from 'react'
import Badge from "./Home/Badge";
import Blog from "./Home/Blog";
import Copyright from "./Home/Copyright";
import Customers from "./Home/Customers";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import ImpNumbers from "./Home/ImpNumbers";
import Industry from "./Home/Industry";
import Navbar from "./Home/Navbar";
import Partner from "./Home/Partner";
import Socials from "./Home/Socials";
import SwiperAni from "./Home/SwiperAni";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SwiperAni />
        <ImpNumbers />
        <Socials />
        <Industry />
        <Partner />
        <Customers />
        <Blog />
        <Footer />
        <Badge />
        <Copyright />
    </div>
  )
}

export default Home