import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const del = (id) => {
  console.log(`Attempting to delete person with id: ${id}, URL: ${baseUrl}/${id}`);
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = (newObject, num) => {
  console.log('newObject ' + newObject)
  const request = axios.put(`${baseUrl}/${newObject}`, num)
  return request.then(response => response.data)
}

export default {getAll, create, del, update}