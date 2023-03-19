import React from 'react';

export default function YearGrid({value, onSelect}) {

    const arr = [];
    for(let i = 2022; i >= 2001; i--){
        arr.push(i);
    }

    const renderedItems = arr.map((element)=>{
        let finalClassName;
        if(element === value){
            finalClassName = 'p-2 bg-white rounded-full';
        }else{
            finalClassName = 'p-2 rounded-full bg-gray-400';
        }
        return <div key={element} className={finalClassName} id={`year-${element}`} onClick = {()=>onSelect(element)}>{element}</div>
    })



  return (
    <div className="year-grid">
        {renderedItems}
    </div>
  )
}
