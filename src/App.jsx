import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Services from './pages/Services';
import Contactpage  from './pages/Contactpagee';
import SanicoSunflowerOilPage from './pages/SanicoSunflowerOilPage'
import SanfitSunflowerOilpage from './pages/SanfitSunflowerOilPage'
import SanicoMaizeFlourPage from './pages/SanicoMaizeFlourPage';
import SoapPage from './pages/SoapPage';
import SanicoRicePage from './pages/SanicoRicePage'
import DeOiledCakePage from './pages/DeOiledCakePage'
import LogisticsTransportPage from './pages/LogisticsTransportPage'
import FillingStationPage from './pages/FillingStationPage'
import WeightbridgePage from './pages/WeightbridgePage';



import Footer from './pages/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactpage" element={<Contactpage/>}/>
        <Route path="/products/sanico"  element={<SanicoSunflowerOilPage/>} />
        <Route path="/products/sanfit"  element={<SanfitSunflowerOilpage/>} />
        <Route path="/products/maize"  element={<SanicoMaizeFlourPage/>} />
        <Route path="/products/rice"   element={<SanicoRicePage/>} />
        <Route path="/products/soap"  element={<SoapPage/>} />
        <Route path="/products/sanico"  element={<SanicoSunflowerOilPage/>} />
        <Route path="/products/doc"   element={<DeOiledCakePage/>} />

        {/* Services (hover submenu) */}
        <Route path="/services/filling"   element={<FillingStationPage/>} />
        <Route path="/services/logistics"  element={<LogisticsTransportPage/>} />
        <Route path="/services/weightbridgePage"  element={< WeightbridgePage/>} />

        


      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
