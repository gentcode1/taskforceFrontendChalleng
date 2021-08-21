import React from 'react';
import'./Card.css'
const Card=({continent, newcases,newtotal,newdeath, totaldeath ,newrecovered,totalrecovered, newvaccinated, totalvaccinated})=>{
return (
  <card className="card">
    <div className="card__left">
      <div className="card__top">
        <h2>{continent}</h2>
      </div>

      <div className="card__middle">
        <p>{newcases}</p>
        <strong>new Cases</strong>
      </div>
      <div className="card__bottom">
        <p>All cases: {newtotal}</p>
      </div>
    </div>
    <div className="card__right">
      <div className="card__top">
        <p>{newdeath}</p>
        <strong>new deaths</strong>
        <p>Total Deaths: {totaldeath}</p>
      </div>

      <div className="card__middle">
        <p>{newrecovered}</p>
        <strong>new recovered</strong>
        <p>ToTal Recovered: {totalrecovered}</p>
      </div>
      <div className="card__bottom">
        <p>{newvaccinated}</p>
        <strong>new Vaccinated</strong>
        <p>Total Vaccinated: {totalvaccinated}</p>
      </div>
    </div>
  </card>
);}
export default Card;
