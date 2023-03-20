import React from 'react';
import './index.css';
import useNavigation from '../../hooks/use-navigation';

export default function Home() {

  const { navigate } = useNavigation();

  const handleClick = (to)=>{
    navigate(to);
  }

  return (
    <div className="text-box">
        <h1 className="singhgrounp"> The Singh's Group</h1>
        <p>Our research group works at the interface of chemistry, biology and material sciences with light as an important tool. We are interested in designing new fluorescent Photoremovable Protecting groups for controlled release of bioactive molecules.</p>
        <a href="/publication" onClick={()=>handleClick('/publication')} className="hero-btn">View Our publications</a>
    </div>
  )
}
