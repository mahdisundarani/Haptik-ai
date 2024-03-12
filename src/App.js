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
    </div>
  );
}

export default App;
