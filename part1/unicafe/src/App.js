import React, { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Disploy = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const Total = ({ total }) => <div>all {total}</div>

const Average = ({ average }) => <div>average {average}</div> 

const Positive = ({ positive }) => <div>positive {positive} %</div> 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / total || 0
  const positive = good / total * 100 || 0

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Disploy good={good} neutral={neutral} bad={bad} />
      <Total total={total} />
      <Average average={average} />
      <Positive positive={positive} />
    </div>
  );
}

export default App;
