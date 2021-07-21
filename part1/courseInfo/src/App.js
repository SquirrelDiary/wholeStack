import React from 'react'

const Header = ({ title }) => <h1>{title}</h1>

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }

    ]
  }


  return <Course course={course} />

}

export default App;
