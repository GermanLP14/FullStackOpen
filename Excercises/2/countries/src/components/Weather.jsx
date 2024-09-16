import { useState, useEffect } from 'react'
import api from '../services/api'


const Weather = ({capital}) => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (capital) {
      console.log(capital)
      api
        .getWeather(capital)
        .then(we => {
          setWeather(we);
        })
        .catch(err => {
          console.log('Error de clima ' + err)
          
      })
    }
  }, [capital])
  
  

  return (
    <div>
        <h2>Weather</h2>
        
        {weather ? 
          (
            <div>
              <p>{weather.current.summary}</p>
              <img src={`../../public/icons/${weather.current.icon_num}.png`} alt="weater icon" className='icon'/>
            </div>
          ) : 
          (
            <p>Loading weather...</p>
          )
        }
        
      </div>
  )
}

export default Weather