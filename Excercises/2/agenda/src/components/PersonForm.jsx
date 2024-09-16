

const PersonForm = ({addNumber, handleNameChange, handleNumberChange}) => {
  return (
    <form onSubmit={addNumber}>
        <div>
          Name: <input onChange={handleNameChange}/> 
          <br />
          Number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm