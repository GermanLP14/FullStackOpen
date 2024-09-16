import { useRef, useState } from 'react'
import api from "./services/api"
import Country from './components/Country';

function App() {

  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null)

  const handleChange = (event) => {
    const searchTerm = event.target.value;

    if(debounceRef.current){
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {

      if(searchTerm){
        api
          .getCountry(searchTerm)
          .then(coun => {
            setCountry(coun)
            setError(null);
          })
          .catch(err => {
            setError('Could not fetch country data')
          })
      }else{
        setCountry(null)
      }
    }, 1000)
  }

  return (
    <div className='app'>
      <h1>Countries Data</h1>
      <input type="text" onChange={handleChange}/>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {country ? <Country countryToShow={country}/> : <p>No country selected</p>}
    </div>
  )
}

export default App
