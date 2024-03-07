import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Bassmala from './pages/basmalla/Bassmala';
import Cover from './pages/cover/Cover';
import {  Routes, Route } from 'react-router-dom';
import FlipBook from './pages/FlipBook/FlipBook';


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact element={<Home/>} path='/'  />
        <Route exact element={<About/>} path='/About'  />
        <Route exact element={<Bassmala/>} path='/Basmalah'  />
        <Route exact element={<Cover/>} path='/Cover'  />
        <Route exact element={<FlipBook/>} path='/FlipBook'  />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
