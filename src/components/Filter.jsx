import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const Filter = ({
  search,
  setSearch,
  selectedRegion,
  setSelectedRegion,
  selectedSubregion,
  setSelectedSubregion,
  sortCriteria,
  setSortCriteria,
  subregions,
  currency,
  setCurrency,
  language,
  setLanguage
}) => {
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const currencySet = new Set();
        const languageSet = new Set();
        data.forEach(country => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach(code => currencySet.add(code));
          }
          if(country.languages){
            Object.values(country.languages).forEach(lang => languageSet.add(lang));
          }
        });
        setCurrencies([...currencySet]);
        setLanguages([...languageSet]);
      })
      .catch(error => console.error("Error fetching currency data:", error));
  }, []);

  return (
    <section className="filter">
      <div className="form">
        <CiSearch className="search-icon" />
        <input
          type="search"
          value={search}
          id="country-search"
          name="countrySearch"
          onChange={(event) => setSearch(event.target.value)}
          placeholder='Search for a country...'
          autoComplete="country"
        />
      </div>

      <div className='region-filter'>
        <select
          value={sortCriteria}
          id="sort-criteria"
          name="sortCriteria"
          className="select"
          onChange={(event) => setSortCriteria(event.target.value)}
          autoComplete="off"
        >
          <option value="none">Sort by</option>
          <option value="population-asc">Population (Ascending)</option>
          <option value="population-desc">Population (Descending)</option>
          <option value="area-asc">Area (Ascending)</option>
          <option value="area-desc">Area (Descending)</option>
        </select>

        <select
          value={selectedSubregion}
          id="subregion"
          name="subregion"
          className="select"
          onChange={(event) => setSelectedSubregion(event.target.value)}
          autoComplete="off"
        >
          <option value="All">Filter by Subregion</option>
          {subregions.map((subregion) => (
            <option value={subregion} key={subregion}>{subregion}</option>
          ))}
        </select>

        <select
          value={selectedRegion}
          id="region"
          name="region"
          onChange={(event) => {
            setSelectedRegion(event.target.value);
            setSelectedSubregion('All');
          }}
          className="select"
          autoComplete="region"
        >
          <option value="All">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={currency}
          id="currency"
          name="currency"
          onChange={(event) => setCurrency(event.target.value)}
          className="select"
          autoComplete="off"
        >
          <option value="All">Filter by Currency</option>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>{curr}</option>
          ))}
        </select>

        <select
          value={language}
          id="language"
          name="language"
          onChange={(event) => setLanguage(event.target.value)}
          className="select"
          autoComplete="off"
        >
          <option value="All">Filter by Language</option>
          {languages.map((curr) => (
            <option value={curr} key={curr}>{curr}</option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default Filter;
