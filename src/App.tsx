import Navbar from "./components/Navbar";
import FirstHero from "./components/FirstHero";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import FourthHero from "./components/FourthHero";
import LastHero from "./components/LastHero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <FirstHero></FirstHero>
      <SecondHero></SecondHero>
      <ThirdHero></ThirdHero>
      <FourthHero></FourthHero>
      <LastHero></LastHero>
      <Footer></Footer>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
