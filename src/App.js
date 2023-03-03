import './App.css';
// import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const url = 'https://ih-countries-api.herokuapp.com/countries';
  console.log(url);
  const getCountries = useCallback(async () => {
    try {
      console.log('charging');
      const res = await axios.get(url);
      console.log(res.data);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div className="App">
      <header className="navbar navbar-dark bg-primary mb-3">
        <NavBar />
      </header>
      {
        <main>
          <div className="container">
            <div className="row">
              <CountriesList countriesList={data} />
              <Routes>
                <Route
                  path="/:idAlpha"
                  element={
                    <CountryDetails
                      countriesList={data}
                      setCountries={setData}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </main>
      }
    </div>
  );
}

export default App;
