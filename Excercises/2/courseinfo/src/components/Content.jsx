import Part from "./Part"
import Total from "./Total"

const Content = ({parts}) => {
console.log(parts)
  return (
    <div>
      {parts.map(
        p => <Part key={p.id} pa={p.name} ex={p.exercises}/>,
      )}
      <b><Total parts={parts}/></b>
    </div>
  )
}

export default Content