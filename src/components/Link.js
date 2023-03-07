import React from 'react';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

export default function Link({ to, children }) {

    const { navigate } = useContext(NavigationContext);

    function handleClick(event){
        if(event.metaKey||event.ctrlKey)
            return;
        event.preventDefault();
        navigate(to);
    }

  return (
    <li><a href={to} onClick={handleClick}>{children}</a></li>
  )
}
