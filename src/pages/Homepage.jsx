import Filter from '../components/Filter';
import Countries from '../components/Countries';

const Homepage = ({
    countries,
    search,
    setSearch,
    selectedRegion,
    setSelectedRegion,
    selectedSubregion,
    setSelectedSubregion,
    sortCriteria,
    setSortCriteria,
    subregions
}) => (
    <>
        <Filter
            search={search}
            setSearch={setSearch}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedSubregion={selectedSubregion}
            setSelectedSubregion={setSelectedSubregion}
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
            subregions={subregions}
        />
        <Countries
            countries={countries}
            search={search}
            selectedRegion={selectedRegion}
            selectedSubregion={selectedSubregion}
            sortCriteria={sortCriteria}
        />
    </>
);

export default Homepage;
