import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Display from './Display'
import Personal from './Personal'
import Info from './Info'
import Footer from './Footer'
import Card from "./Card";
function App() {
const[continents,setContinents]=useState([]);
useEffect(()=>{

const getContinentData= async()=>{
await fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort").then((response)=>response.json()).then((data)=>{
const continents= data.map((continent)=>({
name:continent.continent,
}))
setContinents(continents)
})
getContinentData();
}
},[])




  return (
    <div className="app">
      <div className="app__home">
        <Header />
        <Home />
      </div>
      <div className="info__display">
        <Display cases={345678} title="Tests" total={23456} />
        <Display cases={123} title="Positive Cases" total={56789} />
        <Display cases={989} title="Hospitalised" total={34567} />
        <Display cases={576} title="Recovered" total={45678} />
        <Display cases={689} title="Deaths" total={87654} />
        <Display cases={357} title="Vaccinated" total={678} />
      </div>
      <h1>Per Continent</h1>
      <div className="continent__info">
        <Card
          continent="Africa"
          newcases={55886}
          newtotal={54678930}
          newdeath={646}
          totaldeath={783}
          newrecovered={4678}
          totalrecovered={543678}
          newvacinated={567839}
          totalvaccinated={34567976}
        />
        <Card
          continent="Europe"
          newcases={55886}
          newtotal={54678930}
          newdeath={646}
          totaldeath={783}
          newrecovered={4678}
          totalrecovered={543678}
          newvacinated={567839}
          totalvaccinated={34567976}
        />
      </div>

      <Personal />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
