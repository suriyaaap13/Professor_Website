import React from 'react';
import useNavigation from '../hooks/use-navigation';

export default function Route({children, path}) {

    const { currentPath } = useNavigation();

  return (
    <>
        {path === currentPath && children}
    </>
  )
}
