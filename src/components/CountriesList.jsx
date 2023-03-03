import React from 'react'
import {Link} from "react-router-dom"
import Spinner from './Spinner';

function CountriesList({countriesList}) {
 
if(!countriesList){
    return <Spinner/>
  }
  return (
    
      <div className="col-5" style={{maxHeight: "90vh",  overflow: "scroll"}}>
            <div className="list-group">
             {
                    countriesList.map(country => (
                        
                          <Link key={countriesList.name} className="list-group-item list-group-item-action"  to={country.alpha3Code}> {country.name.common} <span><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} /></span></Link> 
                      
                    ))
                }
            </div>
          </div>
      
            
                
    
  )
}

export default CountriesList