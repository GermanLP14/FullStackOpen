
const Popular = ({anecdotes, votes}) => {

  const highest = Math.max(...votes);
  const position = votes.indexOf(highest);
  const pop = anecdotes[position];

  
  if(highest == 0){
    return (
      <div>
        <h1>There are no votes</h1>
      </div>
    )
  }else{
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{pop}</p>
      </div>
    )
  }
  
}

export default Popular