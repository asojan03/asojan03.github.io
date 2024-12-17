import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Angela Sojan's website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          In the meantime, visit my
          <a href="https://www.linkedin.com/in/angela-sojan" target="_blank" rel="noopener noreferrer"> LinkedIn!
          </a>
        </p>
      </div>
      <p className="read-the-docs">
        Work in progress! Look out for updates
      </p>
    </>
  )
}

export default App
