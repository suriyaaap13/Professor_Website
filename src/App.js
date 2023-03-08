import React from 'react';
import Navbar from './components/Navbar';
import { NavigationProvider } from './context/navigation';
import Route from './components/Route';
import Home from './pages/Home';
import Biosketch from './pages/Biosketch';
import Gallery from './pages/Gallery';
import Research from './pages/Research';
import Group from './pages/Group';

export default function App() {

  return (
    <NavigationProvider>
      <Navbar/>
      <div>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/research'>
          <Research/>
        </Route>
        <Route path='/group'>
          <Group/>
        </Route>
        <Route path='/bio'>
          <Biosketch/>
        </Route>
        <Route path='/gallery'>
          <Gallery/>
        </Route>
      </div>
    </NavigationProvider>
  )
}
