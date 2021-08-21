import React from 'react';
import './Info.css'
import {Link} from 'react-router-dom'
const Info=()=>{
let url = "https://www.linkedin.com/in/umutoniwase-jeanne-gentille-135523159/";
return (
  <div className="info">
    <div className="info__container">
      <div className="info__title">
        <h2>REACH ME</h2>
      </div>
      <div className="info__email">
        <strong>Email</strong>
        <p>umutonigent98@gmail.com</p>
      </div>

      <div className="info__phone">
        <strong>Phone</strong>
        <p>+250781944432</p>
      </div>
      <div className="info__profile">
        <strong>Profile</strong>
       <p style={{color:"white"}}> <a href={url}>
          Linkedin
        </a></p>
      </div>
    </div>
  </div>
);}
export default Info
