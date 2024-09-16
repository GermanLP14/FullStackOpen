const Persons = ({personsToShow, handleClick}) => {

  return (
    <ul>
        <ul>
          {personsToShow.map(p => <li key={p.id}>{p.name} {p.number} 
                                      <button onClick={() => handleClick(p.id)}>Delete</button>
                                  </li>)}
        </ul>
      </ul>
  )
}

export default Persons