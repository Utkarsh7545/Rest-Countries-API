import Country from './Country';

const Countries = ({ countries, search, selectedRegion, selectedSubregion, sortCriteria, currency, language }) => {

  const filteredCountries = countries.filter(country => {
    return (
      (selectedRegion === 'All' || selectedRegion === country.region) && (selectedSubregion === 'All' || selectedSubregion === country.subregion) && country.name.common.toLowerCase().includes(search.toLowerCase()) && (currency === 'All' || (country.currencies && Object.keys(country.currencies).includes(currency))) && (language === 'All' || (country.languages && Object.values(country.languages).includes(language)))
    );
  })
    .sort((firstCountry, secondCountry) => {
      if (sortCriteria === 'population-asc') return firstCountry.population - secondCountry.population;
      else if (sortCriteria === 'population-desc') return secondCountry.population - firstCountry.population;
      else if (sortCriteria === 'area-asc') return firstCountry.area - secondCountry.area;
      else if (sortCriteria === 'area-desc') return secondCountry.area - firstCountry.area;
      return 0;
    });

  return (
    <section className='countries'>
      {filteredCountries.map(country => <Country key={country.cca3} country={country} />)}
    </section>
  )
}

export default Countries