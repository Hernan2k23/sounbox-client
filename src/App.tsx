import Navbar from "./components/Navbar";
import bg from "./assets/FirstBackground.png";
import FirstHero from "./components/FirstHero";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import FourthHero from "./components/FourthHero";
import LastHero from "./components/LastHero";
import Footer from "./components/Footer";
import Login from "./components/Login";
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
      {/* <div
        style={{
          height: "365px",
          backgroundColor: "gray",
          backgroundImage:
            "https://r4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-c876bde870303c5820cce16ed8a244ca.jpg",
        }}
      ></div> */}
    </>
  );
}

export default App;
