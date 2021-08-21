import React from 'react'
import './Personal.css'
import passport from './Assets/passport.JPG'
const Personal=()=>{
return (
  <div className="personal">
    <div className="personal__pic">
      <img src={passport} alt="" />
    </div>
    <div className="personal-info">
      <strong>UMUTONIWASE Jeanne Gentille</strong>
      <h5>Skills</h5>
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React Js</p>
      <p>Node Js</p>
      <p>redux </p>
      <p>Mongo db</p>
      <p>Firebase</p>
      <div className="design__date">
        <p>19 August 2021</p>
      </div>
    </div>
  </div>
);}
export default Personal;
