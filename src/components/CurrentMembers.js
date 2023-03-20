import React from 'react';
import Amit from '../images/Amit.jpg';
import Antara from '../images/antara.JPG';
import Mamta from '../images/Mamata.jpg';
import Maniklal from '../images/Manik.jpg';
import Souvik from '../images/souvik.jpg.png';
import Saugat from '../images/saugat.jpg';
import Malabika from '../images/malabika .png';
import Subham from '../images/subham.jpg';
import Soumik from '../images/soumik.jpg';
import Suchhanda from '../images/Suchhanda.jpg';
import Kinshuk from '../images/kinshuk.jpg';
import Susmita from '../images/susmita.jpg';

export default function CurrentMembers() {

  const row1 = [
    {
      name: "Amit Kumar",
      label: "UGC fellow-SRF",
      pic: Amit
    },
    {
      name: "Antara Sikder",
      label: "Fellow: Institute SRF",
      pic: Antara
    },
    {
      name: "Mamta Ojha",
      label: "UGC fellow-SRF",
      pic: Mamta
    },
    {
      name: "Maniklal Shee",
      label: "Fellow: UGC JRF",
      pic: Maniklal
    },  
];

const row2 = [
  {
    name: "Souvik Ray",
    label: "Fellow: Institute SRF",
    pic: Souvik
  },
  {
    name: "Saugat Mondal",
    label: "Fellow: Institute SRF",
    pic: Saugat
  },
  {
    name: "Malbika Bera",
    label: "Fellow: Institute JRF",
    pic: Malabika
  },
  {
    name: "Subham Pal",
    label: "Fellow: Institute JRF",
    pic: Subham
  },  
];

const row3 = [
  {
    name: "Soumik Chatterjee",
    label: "Fellow: Institute JRF",
    pic: Soumik
  },
  {
    name: "Suchhanda Biswas",
    label: "Fellow: UGC-JRF",
    pic: Suchhanda
  },
  {
    name: "Kinshuk Malik",
    label: "Lateral Msc Student",
    pic: Kinshuk
  },
  {
    name: "Susmita Dey",
    label: "Lateral Msc Student",
    pic: Susmita
  },  
];


const render = (row)=>{
  const renderedItems = row.map((element)=>{
    return (
    <div class="col-md-3 profile text-center" key={element.name}>
        <div class="img-box">
            <img src={element.pic}  alt={element.name}  class="img-responsive"/>
            <ul>
                <a href="https://www.google.com/"><li><i class="fa fa-envelope"></i></li></a>
                <a href="https://www.google.com/"><li><i class="fa fa-envelope"></i></li></a>
            </ul>
        </div>
        <h2>{element.name}</h2>
        <div className='mt-4 '>{element.label}</div>
    </div>
    );
  })

  return renderedItems;

}



  return (
    <div>
        <div className="row">
          {render(row1)}
        </div>
        <div className="row">
          {render(row2)}
        </div>
        <div className="row">
          {render(row3)}
        </div>
    </div>
  )
}
