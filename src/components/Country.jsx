import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { cca3, name, population, region, capital, flags } = country;

    return (
        <Link to={`countries/${cca3}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="each-country">
                <img src={flags.png} alt={name.common} />
                <div className="details">
                    <h3>{name.common}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                </div>
            </div>
        </Link>
    )
}

export default Country