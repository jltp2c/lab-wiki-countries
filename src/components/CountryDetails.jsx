// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import Spinner from './Spinner';



function CountryDetails({countriesList,setCountries}) {

let {idAlpha} = useParams()
// const url = "https://ih-countries-api.herokuapp.com/countries/"

//using without Axios
const country = countriesList.find((country) => country.alpha3Code ===  idAlpha)


// i have a problem it doesnt work the loading is weird... try to replace "country to oneCountry below"
  // const [oneCountry, setOneCountry] = useState([]);

  // const getOneCountry= async () => {
  //   try {
  //     const response = await axios.get(url+country.alpha3Code);
  //     console.log(response.data)
  //     setOneCountry(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getOneCountry();
  // }, []);

  if(!country){
    return <Spinner/>
  }


  return (
<div className="col-7">
    
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}`} />
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
                        country &&
                        country.borders.map((border)=>{
                         
                        const borderCountries = countriesList.find(countryMap => countryMap.alpha3Code === border)

                        console.log(borderCountries)

                         return  <li key={border}><a href={`/${border}`}>
                            
                         { borderCountries.name.common}
                            
                            </a></li>
                        })         
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