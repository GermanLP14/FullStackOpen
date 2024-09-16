import Weather from "./Weather";

const Country = ({countryToShow}) => {

  const lang = countryToShow.languages;

  

  return (
    <div className="country">
      <h2>{countryToShow.name.common}</h2>
      <p>Capital: {countryToShow.capital}</p>
      <p>Area: {countryToShow.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.entries(lang).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={countryToShow.flags.png} alt={countryToShow.flag} className="flag"/>
      <Weather capital={countryToShow.capital}/>
    </div>
    
  )
}

export default Country