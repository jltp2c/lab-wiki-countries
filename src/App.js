import './App.css';
// import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const url = 'https://ih-countries-api.herokuapp.com/countries';
  const [data, setData] = useState([]);

  const getCountries = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, [data]);

  return (
    <div className="App">
      <header className="navbar navbar-dark bg-primary mb-3">
        <NavBar />
      </header>
      {data.length && (
        <main>
          <div className="container">
            <div className="row">
              <CountriesList countriesList={data} />
              <Routes>
                <Route
                  path="/:idAlpha"
                  element={<CountryDetails countriesList={data} />}
                />
              </Routes>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
