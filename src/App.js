import './App.css';
// import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <header className="navbar navbar-dark bg-primary mb-3">
        <NavBar />
      </header>
      {
        <main>
          <div className="container">
            <div className="row">
              <CountriesList countriesList={data} setCountries={setData} />
              <Routes>
                <Route
                  path="/:idAlpha"
                  element={<CountryDetails countriesList={data} />}
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
