import React from 'react';
import './Display.css'
import Card from './Card'
const Display=({cases, title, total})=>{
return (
  <div className="display">
    <div className="display__info">
      <p>{cases}</p>
      <strong>{title}</strong>
      <p className="display__p">{total}</p>
    </div>
    

    {/* <div className="display__card"> */}
      
      {/* <Card /> */}
      {/* <Card /> */}
    {/* </div> */}
  </div>
);}
export default Display;
