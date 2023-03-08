import React from 'react';
import useNavigation from '../hooks/use-navigation';

export default function Link({ to, children }) {

    const { navigate } = useNavigation();

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
