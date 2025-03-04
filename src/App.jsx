import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>First change saurabh</h2>
    <p>second change by saurabh</p>
    <p>Third change by saurabh</p>
    <p>first line of user1</p>
    <p>second change by user1</p>
    <p>third change by user1</p>
    <p>fourth commit by user1</p>
    <p>fourth change by saurabh</p>
    <p>fifth change by saurabh</p>
    <p>first change by saurabh-br1</p>
    <p>fifth change by user1</p>
    <p>first change by saurabh-br1</p>
    <p>second change by saurabh-br1</p>
    <p>fifth change by saurabh</p>

    <Form/>
    </>
  )
}

export default App
