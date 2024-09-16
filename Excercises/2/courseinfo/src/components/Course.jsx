import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => {
  return (
    <>
    <h1>Web development curriculum</h1>
      {course.map(
        c => (
          <div key={c.id}>
            <Header course={c.name}/>
            <Content parts={c.parts}/>
          </div>
        )
      )}
    </>
    
  )
}

export default Course