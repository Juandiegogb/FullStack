import { useState } from "react";
import countryServices from "./services/countryServices";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState([]);

  useEffect(() => {
    countryServices.obtain().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setShow(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue)
      )
    );
  };

  const showHandler = (name) =>
    setShow(countries.filter((country) => country.name.common === name));
  
  const infoRender = () => {
    if (show.length > 10) {
      return <p>Too many countries, specific another filter</p>;
    } else if (show.length === 1) {
      const country = show[0];
      return <CountryView country={country} />;
    } else {
      return show.map((country) => (
        <div
          key={country.altSpellings[0]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>{country.name.common}</p>
          <button
            type="button"
            style={{ marginLeft: "5px", height: "30px" }}
            onClick={() => {
              showHandler(country.name.common);
            }}
          >
            Show
          </button>
        </div>
      ));
    }
  };

  return (
    <div>
      <label htmlFor="country">Find countries </label>
      <input type="text" id="country" onChange={searchHandler} />
      <div>{infoRender()}</div>
    </div>
  );
}

export default App;

const CountryView = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital : </strong>
        {country.capital[0]}
      </p>
      <p>
        <strong>Area :</strong> {country.area} Km
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        height="80px"
      />
    </div>
  );
};
