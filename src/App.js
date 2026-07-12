import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const inputRef = useRef(null)

  const add = () => {
    const inputValue = inputRef.current.value
    const num = parseFloat(inputValue)
    setResult(result + num)
  }

  const minus = () => {
    const inputValue = inputRef.current.value
    const num = parseFloat(inputValue)
    setResult(result - num)
  }

  const times = () => {
    const inputValue = inputRef.current.value
    const num = parseFloat(inputValue)
    setResult(result * num)
  }

  const divide = () => {
    const inputValue = inputRef.current.value
    const num = parseFloat(inputValue)
    if (num === 0) {
      return
    }
    setResult(result / num)
  }

  const resetInput = () => {
    inputRef.current.value = ''
  }

  const resetResult = () => {
    setResult(0)
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      
      <div className="input-section">
        <input
          type="number"
          ref={inputRef}
          placeholder="Enter a number"
          className="calculator-input"
        />
      </div>

      <div className="result-section">
        <label>Result:</label>
        <div className="result-display">{result}</div>
      </div>

      <div className="operations">
        <button onClick={add}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      <div className="reset-buttons">
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </div>
    </div>
  )
}

export default App
