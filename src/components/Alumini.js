import React from 'react';
import Jana from '../images/Jana.jpg';
import Nilanjana from '../images/nilanjana.jpg';
import Ikbal from '../images/ikbal.jpg';
import Sangamitra from '../images/sangamitra.jpg';

import Karthik from '../images/karthik anna.jpg';
// import Moumita from '../images/karthik anna.jpg';
import Moumita from '../images/Moumita.JPG';
import Sharabani from '../images/sharabani.jpg';
import Sandipan from '../images/Sandipan.JPG';

import Venkatesh from '../images/venky pro pic 123.jpg';
import Krishna from '../images/krishna.jpg';
import Sheriff from '../images/sheriff.jpg';
import Bhaskara from '../images/bhaskar2.jpg';

export default function Alumini() {

    const row3 = [
        {
          name: "Dr.Yarra Venkatesh",
          label: "Post Doc in University of Pennsylvania, USA",
          pic: Venkatesh
        },
        {
          name: "Dr. Krishna Kalyani Behara",
          label: "",
          pic: Krishna
        },
        {
          name: "Dr. Sk. Sheriff Shah",
          label: "",
          pic: Sheriff
        },
        {
          name: "Dr. Bhaskara Rao P",
          label: "",
          pic: Bhaskara
        },  
      ];

    const row1 = [
        {
          name: "Dr. Avijit Jana",
          label: "DST INSPIRE Faculty in the Biomaterials Group at the CSIR-Indian Institute of Chemical Technology Hyderabad.",
          pic: Jana
        },
        {
          name: "Dr. Nilanjana Chowdhury",
          label: "Post Doc in University of Michigan, USA",
          pic: Nilanjana
        },
        {
          name: "Dr.Mohammed Ikbal",
          label: "Assistant Professor in Chemistry, West Bengal",
          pic: Ikbal
        },
        {
          name: "Dr.Sangamitra Atta",
          label: "Assistant Professor in Chemistry",
          pic: Sangamitra
        },  
    ];

    const row2 = [
        {
          name: "Dr.S karthik",
          label: "Post Doc in University of Cincinnati, USA",
          pic: Karthik
        },
        {
          name: "Dr. Moumita Gangopadhyay",
          label: "Assistant Professor in Chemistry, Ghatal Rabindra Satabarshiki Mahavidyalaya,Paschim Midnapore",
          pic: Moumita
        },
        {
          name: "Dr.Sharabani Barman",
          label: "Assistant Professor in Chemistry, West Bengal",
          pic: Sharabani
        },
        {
          name: "Dr.Sandipan Biswas",
          label: "Post Doc in Switzerland, Marie-Curie fellow",
          pic: Sandipan
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
