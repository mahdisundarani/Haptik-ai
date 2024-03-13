import Blog from "./components/Blog";
import Customers from "./components/Customers";
import Hero from "./components/Hero";
import ImpNumbers from "./components/ImpNumbers";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Socials from "./components/Socials";
import SwiperAni from "./components/SwiperAni";

function App() {
  return (
    <div className="">
        <Navbar/>
        <Hero/>
        <SwiperAni/>
        <ImpNumbers/>
        <Socials/>
        <Industry/>
        <Partner/>
        <Customers/>
        <Blog/>
    </div>
  );
}

export default App;
