import React from 'react'
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import axios from 'axios';

function CountriesList({countriesList,setCountries}) {
  const url = 'https://ih-countries-api.herokuapp.com/countries';
  console.log(url);
   const getCountries = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data)
      
      setCountries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    
      <div className="col-5" style={{maxHeight: "90vh",  overflow: "scroll"}}>
            <div className="list-group">
             {
                    countriesList.map(country => (
                        <div key={country.alpha3Code} className="list-group">
                          <Link  to={country.alpha3Code}> {country.name.common} <span><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} /></span></Link> 
                        </div>
                    ))
                }
            </div>
          </div>
      
            
                
    
  )
}

export default CountriesList