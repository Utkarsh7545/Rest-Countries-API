import { CiSearch } from "react-icons/ci";

const Filter = ({
  search,
  setSearch,
  selectedRegion,
  setSelectedRegion,
  selectedSubregion,
  setSelectedSubregion,
  sortCriteria,
  setSortCriteria,
  subregions
}) => {

  return (
    <section className="filter">
      <div className="form">
        <CiSearch className="search-icon" />
        <input type="search" value={search} id="country-search" name="countrySearch" onChange={(event) => setSearch(event.target.value)} placeholder='Search for a country...' autoComplete="country" />
      </div>

      <div className='region-filter'>
        <select value={sortCriteria} id="sort-criteria" name="sortCriteria" className="select"
          onChange={(event) => setSortCriteria(event.target.value)} autoComplete="off" >
          <option value="none">Sort by</option>
          <option value="population-asc">Population (Ascending)</option>
          <option value="population-desc">Population (Descending)</option>
          <option value="area-asc">Area (Ascending)</option>
          <option value="area-desc">Area (Descending)</option>
        </select>

        <select value={selectedSubregion} id="subregion" name="subregion" className="select"
          onChange={(event) => setSelectedSubregion(event.target.value)} autoComplete="off" >
          <option value="All">Filter by Subregion</option>
          {subregions.map((subregion) => (
            <option value={subregion} key={subregion}>{subregion}</option>
          ))}
        </select>

        <select value={selectedRegion} id="region" name="region" onChange={(event) => {
          setSelectedRegion(event.target.value)
          setSelectedSubregion('All')
        }} className="select" autoComplete="region" >
          <option value="All">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default Filter