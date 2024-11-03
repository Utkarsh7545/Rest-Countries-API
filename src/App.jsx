import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CountryDetails from './components/CountryDetails';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedSubregion, setSelectedSubregion] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('none');
  const [currency, setCurrency] = useState('All');
  const [language, setLanguage] = useState('All');

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  const url = 'https://restcountries.com/v3.1/all';

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } 
    catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  let subregions = [];

  if (selectedRegion !== 'All') {
    subregions = Array.from(
      new Set(
        countries
          .filter(country => country.region === selectedRegion)
          .map(country => country.subregion)
      )
    );
  }
  
  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              countries={countries}
              search={search}
              setSearch={setSearch}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedSubregion={selectedSubregion}
              setSelectedSubregion={setSelectedSubregion}
              sortCriteria={sortCriteria}
              setSortCriteria={setSortCriteria}
              subregions={subregions}
              currency={currency}
              setCurrency={setCurrency}
              language={language}
              setLanguage={setLanguage}
            />
          }
        />
        <Route path="/countries/:cca3" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;