import React from 'react';
import useNavigation from '../hooks/use-navigation';

export default function LinkButton({to, children, className}) {

    const { navigate } = useNavigation();

    function handleClick(event){
        if(event.metaKey||event.ctrlKey)
            return;
        event.preventDefault();
        navigate(to);
    }
    
    let finalClassName = className;
    finalClassName += ' rounded px-3 py-2 mx-2';
    
    return (
        <button onClick={handleClick} className={finalClassName}>
            {children}
        </button>
    )
}
