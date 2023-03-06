import React from 'react';
import Navbar from './components/Navbar';
// import Biosketch from './pages/Biosketch';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Gallery/>
      {/* <Biosketch/> */}
    </div>
  )
}
