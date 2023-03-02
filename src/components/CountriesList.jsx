import React from 'react'
import {Link} from "react-router-dom"

function CountriesList({countriesList}) {

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