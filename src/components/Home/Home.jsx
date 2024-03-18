import React from 'react'
import Badge from "./Badge";
import Blog from "./Blog";
import Copyright from "./Copyright";
import Customers from "./Customers";
import Footer from "./Footer";
import Hero from "./Hero";
import ImpNumbers from "./ImpNumbers";
import Industry from "./Industry";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Socials from "./Socials";
import SwiperAni from "./SwiperAni";

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