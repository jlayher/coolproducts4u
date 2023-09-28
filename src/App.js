
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import OurProduct from './Components/OurProduct/OurProduct';
import Signup from './Components/Signup/Signup';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <OurProduct />
      <Signup />
      <AboutUs />
      <Footer />

    </div>
  );
}

export default App;
