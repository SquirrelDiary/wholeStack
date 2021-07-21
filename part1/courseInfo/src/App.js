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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course course={course} />
      )}
    </div>
  )
}

export default App;
