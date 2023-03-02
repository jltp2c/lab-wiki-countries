import React from 'react'
import { useParams } from 'react-router-dom'


function CountryDetails({countriesList}) {

let {idAlpha} = useParams()

const country = countriesList.find((country) => country.alpha3Code ===  idAlpha)


const ArrayBorders = country.borders ; 

console.log(ArrayBorders)


  return (
    

<div className="col-7">
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
            <h1>{country.name.common}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>{country.capital}</td>
                </tr>
                <tr>
                  <td>{country.area} km<sup>2</sup></td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                        country.borders.map((border)=>(
                          <li key={border}><a href={`/${border}`}>
                            
                            {border}
                            
                            </a></li>
                        ))
                            
                      }
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>




    
  )
}

export default CountryDetails