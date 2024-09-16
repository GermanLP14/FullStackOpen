import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const api = 'z5ub5t3b36zamys6489p4cmkpr03hs7m1jmwkz4x'

const getCountry = (name) => {
  const request = axios.get(`${baseUrl}${name}`);
  console.log(`${baseUrl}${name}`);
  return request.then(response => response.data);
}

const getWeather = (place) => {
  const request = axios.get(`https://www.meteosource.com/api/v1/free/point?place_id=${place}&sections=all&timezone=UTC&language=en&units=metric&key=${api}`)
  return request.then(response => response.data);
}

export default {getCountry, getWeather}