import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import numbers from "./services/numbers"
import Notification from "./components/Notification"

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(()=>{
    numbers
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])
  

  const addNumber = (event) => {
    event.preventDefault();

    const num = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(n => n.name)

    if(names.includes(newName)){
      let pers = persons.find(p => p.name == newName);
      console.log('persona ' + pers.id)
      numbers
        .update(pers.id, num)
        .then(updatedPerson => {
          setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
          setErrorMessage(
            `${newName} has been updated successfully`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setErrorMessage(
            `An error occurred when trying to update ${newName}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)

        })
    }else{
      numbers
        .create(num)
        .then(returnedNumber => {
          setPersons(persons.concat(returnedNumber))
          setErrorMessage(
            `${newName} has been added successfully`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {

          setErrorMessage(
            `An error occurred when trying to add ${newName}`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000);

        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleClick = (id) => {
    numbers
    .del(id)
    .then(response => {
      setPersons(persons.filter(per => per.id !== id))
      setErrorMessage(
        `deleted successfully`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })
    .catch(error => {
      console.log('Error deleting person: ', error)
      setErrorMessage(
        `An error occurred when trying to delete `
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })
  }

  const personsToShow = filter == ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage}/>

      <Filter onChange={handleFilter}/>

    <br />

      <PersonForm addNumber={addNumber} 
                  handleNameChange={handleNameChange} 
                  handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow} handleClick={handleClick}/>

    </div>
  )
}

export default App
