import React from 'react';
import Navbar from './components/Navbar';
import { NavigationProvider } from './context/navigation';
import Route from './components/Route';
import Home from './pages/Home';
import Biosketch from './pages/Biosketch';
import Gallery from './pages/Gallery';
import Research from './pages/Research';
import Group from './pages/Group';
import Login from './pages/Login';
import Register from './pages/Register';
import NavbarAdmin from './components/NavbarAdmin';

export default function App() {

  const currentPath = window.location.pathname;
  
  const renderAdmin = (
    <div>
      <NavbarAdmin/>
      <Route path='/admin/login'>
        <Login/>
      </Route>
      <Route path='/admin/register'>
        <Register/>
      </Route>
    </div>
  )

  const renderClient = (
    <div>
      <Navbar/>
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
  )

  const check = () => {
    if(currentPath === '/admin/login'||currentPath === '/admin/register')return true;
    return false;
  }
    
  const renderContent = check ? renderAdmin : renderClient;

  return (
    <NavigationProvider>
      {renderContent}
    </NavigationProvider>
  );
}
