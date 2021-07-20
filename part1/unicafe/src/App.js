import React, { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => <p>{`${text} ${value}`}</p>


const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h1>statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  );
}

export default App;
