import './App.css';
import './Style/Style.css'
import './Style/Responsive.css'
 import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Components/LandingPage/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import BuyDogs from './Components/BuyDogs/BuyDogs';
import Footer from './Footer/Footer';


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/buy-dogs' element={<BuyDogs/>} />
        </Routes>
        <Footer/>
      </HashRouter>

    </>
  );
}

export default App;
