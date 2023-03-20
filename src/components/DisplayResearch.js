import React from 'react';
import ResearchContent from './ResearchContent';

export default function DisplayResearch({items}) {

    const renderedItems = items.map((element) => {
        if(element.id%2){
            return (
                <div className='grid grid-rows-1 grid-flow-col gap-4 my-6'>
                    <div className='not-italic'>
                        <div className='font-bold text-4xl py-2'>{element.title}</div>
                        <div className='my-2 py-2 text-2xl'>
                            <ResearchContent item = {element.content}/>
        
                        </div>
                        
                    </div>
                    <div>
                        <img src={element.img} alt="ResearchImage" />
                    </div>  
                </div>
            );
        }else{
            return (
                <div className='grid grid-rows-1 grid-flow-col gap-4 my-6'>
                    <div>
                        <img src={element.img} alt="ResearchImage" />
                    </div>
                    <div className='not-italic'>
                        <div className='font-bold text-4xl py-2'>{element.title}</div>
                        <div className='my-2 py-2 text-2xl'>
                            <ResearchContent item = {element.content}/>
        
                        </div>
                        
                    </div>
                </div>
            );
        }
        
    });

  return (
    <div className='p-16'>
        {renderedItems}
    </div>
  )
}
