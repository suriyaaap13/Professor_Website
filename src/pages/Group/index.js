import React from 'react';
import './index.css';
import CurrentMembers from '../../components/CurrentMembers';


export default function index() {


  return (
    <section className="team">
    {/* Present Member List */}
      <div className="container">
          <h1>Current Members</h1>
          <CurrentMembers/>
      </div>


    {/* Alumni */}
    <div class="container">
      <h1>Alumni</h1>
      <div class="row"></div>
    </div>

    </section>

  )
}
