import React from 'react';
import { useState } from 'react'; 
import Table from '../../components/Table';
import YearGrid from '../../components/YearGrid';
import './index.css';

export default function Research() {

  const [year, setYear] = useState(2022);


  const handleYearChange = (value)=>{
    console.log("Hello World", value);
    setYear(value);
    console.log("Hello World", value);
  }


//////////////////////////////////////////////////////////////////////
//////// Mudit Please update the Map for every year////////////////////////
//////////////////////////////////////////////////////////////////////////

  const mp = new Map();
  mp.set(2022, [
    {
      paperNo: 128,
      title: "Photogenerated Azido Radical Mediated Oxidation: Access to Carbonyl Functionality from Alcohols, Alkylarenes, and Olefins via Organophotoredox",
      overview: require('../../images/Manik adv syn catal.jpg'),
      collaborator: "Maniklal Shee and N. D. Pradeep Singh",
      link: "https://doi.org/10.1002/adsc.202200242",
      width: "500",
      height: "190",
    },
    {
      paperNo: 127,
      title: "Visible Light-Responsive Delivery of Two Anticancer Drugs Using Single-Component Fluorescent Organic Nanoparticles",
      overview: require('../../images/Souvik 1.jpeg'),
      collaborator: "Souvik Ray, Saptarshi Banerjee, Amit Kumar Singh, Mamata Ojha, Arindam Mondal and N. D. Pradeep Singh",
      link: "https://doi.org/10.1021/acsanm.2c01515",
      width: "550",
      height: "210",
    },
    {
      paperNo: 126,
      title: "Chemical versatility of azide radical: journey from a transient species to synthetic accessibility in organic transformations",
      overview: require('../../images/chem soc rev.jpg'),
      collaborator: "Maniklal Shee and N. D. Pradeep Singh",
      link: "https://doi.org/10.1039/D1CS00494H",
      width: "450",
      height: "350",
    }
  ])

  const config = [
    {
      label: 'Paper No',
      render: (element)=>element.paperNo
    },
    {
      label: 'Title',
      render: (element)=>element.title
    },
    {
      label: 'Overview',
      render: (element)=><img src={element.overview} alt={element.title} height = {element.height} width = {element.width}/>
    },
    {
      label: 'Collaborator',
      render: (element)=>element.collaborator
    },
    {
      label: 'Link',
      render: (element)=> <a href={`${element.link}`}>click here</a>
    }
  ];

  const keyFn = (element)=>{
    return element.title;
  }

  return (
    <>
      <YearGrid value = {year} onSelect = {handleYearChange}/>
      <div>
        <Table data = {mp.get(year)} config = {config} value = {year} keyFn = {keyFn}/>
      </div>
      
    </>
  )
}
