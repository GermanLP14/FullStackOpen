import Part from "./Part"

const Content = ({parts}) => {
  return (
    <div>
      <Part pa={parts[0].name} ex={parts[0].exercises}/>
      <Part pa={parts[1].name} ex={parts[1].exercises}/>
      <Part pa={parts[2].name} ex={parts[2].exercises}/>
    </div>
  )
}

export default Content