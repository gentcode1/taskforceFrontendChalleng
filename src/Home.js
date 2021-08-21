import React ,{useState,useEffect}from 'react';
import './Home.css';


const Home=()=>{
const[countries,setCountries]= useState([]);
const[country, setCountry]=useState("RW");
const[countryInfo,setCountryInfo]=useState({})
useEffect(()=>{
const getCountriesData=async()=>{
await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort").then((response)=>response.json()).then((data)=>{
const countries=data.map((country)=>({
name:country.country,
value:country.countryInfo.iso2,
flag:country.countryInfo.flag,
})

)

setCountries(countries);
});
}
getCountriesData();
},[])

const onCountryChange=async(e)=>{
const countryCode=e.target.value;
console.log(countryCode)

const url =
  countryCode === "RW"
    ? "https://corona.lmao.ninja/v2/countries/Rwanda?yesterday%27?yesterday&sort"
    : `https://corona.lmao.ninja/v2/countries/${countryCode}`;
await fetch(url).then(response=>response.json()).then(data=>{
setCountry(countryCode); 
setCountryInfo(data);
 })
}
console.log(countryInfo)
return (
  <div className="home">
    <div className="home__container">
      <div className="home__top">
        <div className="home__update">
          <p>UPDATES</p>
        </div>
        <div className="home__search">
          <p>Search a country</p>
        </div>
      </div>
      <div className="home__location">
        <div className="home__country">
          <select value={country} onChange={onCountryChange}>
            <option value="RW">
              <img
                src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/rw.png"
                alt=""
              />
              Rwanda
            </option>
            {countries.map((country) => (
              <option value={country.value}>
                <img src={country.flag} alt="" />
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="home__calendar">
          {" "}
          <p>16/08/2021</p>
        </div>
        <div className="home__button">
          <p>Submit</p>
        </div>
      </div>
    </div>
    <div className="home__cumulative">
      <p className="home__p">{countryInfo.tests}</p>
      <p>Cumulative</p>

      <div></div>
    </div>
  </div>
);
}
export default Home;
