import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.p1} exercises={props.e1} />
      <Part part={props.p2} exercises={props.e2} />
      <Part part={props.p3} exercises={props.e3} />
    </>
    )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course} />
      <Content p1={part1.name} e1={part1.exercises} p2={part2.name} e2={part2.exercises} p3={part3.name} e3={part3.exercises} />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))