import "./App.css";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import WhoWeAre from "./components/WhoWeAre";
import Stats from "./components/Stats";
import HowWeWork from "./components/HowWeWork";
import Reviews from "./components/Reviews";
import Team from "./components/Team";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Services from "./components/Services";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div class="bg-[#F4F3EE]">
      <NavBar />
      <Hero />
      <Steps />
      <WhoWeAre />
      <Stats />
      <Services />
      <HowWeWork />
      <Reviews />
      <Team />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
