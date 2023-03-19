import React from 'react';
import Logo from '../../images/NavBarLogo.png';
import LinkButton from '../LinkButton';

export default function NavbarAdmin() {

  const links = [
    {
      label: 'Client Page',
      path: '/',
      class: 'bg-red-500 hover:bg-red-800'
    }, 
    {
      label: 'Login',
      path: '/admin/login',
      class: 'bg-blue-500 hover:bg-blue-800'
      
    },
    {
      label: 'Register',
      path: '/admin/register',
      class: 'bg-blue-500 hover:bg-blue-800'
    }
  ];

  const renderedLinks = links.map((link)=>{
    return <LinkButton className = {link.class} key={link.path} to={link.path}>{link.label}</LinkButton>
  });

  return (
    <div className='flex flex-row justify-between p-4 bg-gray-200'>
      {/* Logo */}
      <div >
        <img className='h-20' alt='IIT-KGP-Logo' src={Logo}/>
      </div>
      {/* Login and Register */}
      <div className='text-white flex h-14'>
        {renderedLinks}
      </div>
    </div>
  )
}
