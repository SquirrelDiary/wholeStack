import React from 'react'

const Header = ({ title }) => <h2>{title}</h2>

const Part = ({ name, exercises }) => <p>{`${name} ${exercises}`}</p>

const Content = ({ parts }) => (
  <>
    {parts.map(part =>
      <Part name={part.name} exercises={part.exercises} key={part.id} />
    )}
  </>
)


const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((total, current) => total + current, 0)
  return (
    <p><strong>Number of {total} exercises</strong></p>
  )
}

const Course = ({ course }) => (
  <>
    <Header title={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

export default Course