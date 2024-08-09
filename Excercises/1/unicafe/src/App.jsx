import { useState } from 'react'
import Header from './Header';
import Button from './Button';
import Statics from './Statics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }
  return (
    <div>
      <Header />
      <Button onClick={handleClickGood} text="good"/>
      <Button onClick={handleClickNeutral} text="neutral"/>
      <Button onClick={handleClickBad} text="bad"/>
      <Statics good={good} 
              neutral={neutral} 
              bad={bad} 
              all={all} 
              average={(good * 1 + neutral * 0 + bad * (-1))/all} 
              positive={(good / all) * 100}/>

    </div>
  )
}



export default App
