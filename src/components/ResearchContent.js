import React, {useState} from 'react';


export default function ResearchContent({item}) {
    
  const [isExpanded, setIsExpanded] = useState( item.length <= 750 );

  return (
    <div>
        {
            item.length <= 800 ? 
            <div>{item}</div> 
            : 
            <div>
                {isExpanded  ? item : item.substring(0,750)}
                { !isExpanded && <span onClick={()=>setIsExpanded(!isExpanded)} className='text-blue-600 underline'> see more...</span> }
                {isExpanded && <span onClick={()=>setIsExpanded(!isExpanded)} className='text-blue-600 underline'> show less...</span>}
            </div>
        }
    </div>
    

    
  )
}
