
import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import HakkimizdaPage from './pages/HakkimizdaPage';

function App() {
  return (
        <div className="app ">
        <Header />
        <div className='content '>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galeri' element={<GalleryPage clickEventState={'none'}/>} />
          <Route path='/galeri/:id' element={<GalleryPage clickEventState={'block'} />} />
          <Route path='/iletisim' element={<AboutPage />}/>
          <Route path='/hakkinda' element={<HakkimizdaPage />}/>
          <Route path='*' element={<HomePage />} />
        </Routes>
        </div>
        <Footer />
        </div>

  )
}

export default App
