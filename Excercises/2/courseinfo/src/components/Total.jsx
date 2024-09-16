

const Total = ({parts}) => {

  const sum = parts.reduce(
    (acc, cur) => acc + cur.exercises, 0);

  console.log('total' + sum)
  return (
    <div>
      <p>Number of excercises {sum}</p>
    </div>
  )
}

export default Total