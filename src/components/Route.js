import React, { useContext } from 'react';
import NavigationContext from '../context/navigation';

export default function Route({children, path}) {

    const { currentPath } = useContext(NavigationContext);

  return (
    <>
        {path === currentPath && children}
    </>
  )
}
