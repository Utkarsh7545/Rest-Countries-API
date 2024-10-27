import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../countryDetails.css";
import { IoMdArrowBack } from "react-icons/io";

const CountryDetails = () => {
    const [country, setCountry] = useState(null);
    const { cca3 } = useParams();

    const fetchCountryData = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
            const data = await response.json();
            setCountry(data[0]);
        }
        catch (error) {
            console.error("Error fetching country data:", error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, [cca3]);

    if (!country) return <p>Loading...</p>;

    const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
    } = country;

    const currencyNames = currencies ? Object.values(currencies).map(currency => currency.name).join(", ") : "N/A";
    const languageNames = languages ? Object.values(languages).join(", ") : "N/A";

    return (
        <>
            <section className="country">
                <Link to="/" className="btn btn-light">
                    <IoMdArrowBack className="arrow-icon"/>
                    <button style={{ width: '60px', height: '30px', border: 'none', borderRadius: '5px'}}>Back</button>
                </Link>

                <article>
                    <div className="country-inner">
                        <div className="flag">
                            <img src={flags.png} style={{height:'300px', width:'480px'}} alt={name.common} />
                        </div>

                        <div className="country-details">
                            <div>
                                <h2>{name.common}</h2>
                                <h5>
                                    Population: <span>{population}</span>
                                </h5>
                                <h5>
                                    Region: <span>{region}</span>
                                </h5>
                                <h5>
                                    Sub Region: <span>{subregion}</span>
                                </h5>
                                <h5>
                                    Capital: <span>{capital}</span>
                                </h5>
                            </div>

                            <div className="tld">
                                <h5>
                                    Top Level Domain: <span>{tld ? tld.join(", ") : "N/A"}</span>
                                </h5>
                                <h5>
                                    Currencies: <span>{currencyNames}</span>
                                </h5>
                                <h5>
                                    Languages: <span>{languageNames}</span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="border-countries">
                        <h3>Border Countries: </h3>
                        <div className="borders">
                            {borders ? (
                                borders.map((border) => (
                                    <Link key={border} to={`/countries/${border}`}>
                                        <button className="border-button">{border}</button>
                                    </Link>
                                ))
                            ) : (
                                <span>N/A</span>
                            )}
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default CountryDetails;
