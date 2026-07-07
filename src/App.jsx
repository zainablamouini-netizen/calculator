import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  const handleOperation = (operation) => {
    setError('')
    const inputValue = inputRef.current.value

    if (!inputValue) {
      setError('Please enter a number')
      return
    }

    const num = parseFloat(inputValue)

    if (isNaN(num)) {
      setError('Please enter a valid number')
      return
    }

    let calculatedResult
    switch (operation) {
      case 'add':
        calculatedResult = num + num
        break
      case 'subtract':
        calculatedResult = num - num
        break
      case 'multiply':
        calculatedResult = num * num
        break
      case 'divide':
        if (num === 0) {
          setError('Cannot divide by zero')
          return
        }
        calculatedResult = num / num
        break
      default:
        return
    }

    setResult(calculatedResult.toString())
  }

  const resetInput = () => {
    inputRef.current.value = ''
    setError('')
  }

  const resetResult = () => {
    setResult('')
    setError('')
  }

  const resetAll = () => {
    inputRef.current.value = ''
    setResult('')
    setError('')
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

      {error && <div className="error">{error}</div>}

      <div className="result-section">
        <label>Result:</label>
        <div className="result-display">{result || '0'}</div>
      </div>

      <div className="operations">
        <button onClick={() => handleOperation('add')} className="btn add">
          + Add
        </button>
        <button onClick={() => handleOperation('subtract')} className="btn subtract">
          - Subtract
        </button>
        <button onClick={() => handleOperation('multiply')} className="btn multiply">
          × Multiply
        </button>
        <button onClick={() => handleOperation('divide')} className="btn divide">
          ÷ Divide
        </button>
      </div>

      <div className="reset-buttons">
        <button onClick={resetInput} className="btn reset">
          Reset Input
        </button>
        <button onClick={resetResult} className="btn reset">
          Reset Result
        </button>
        <button onClick={resetAll} className="btn reset-all">
          Reset All
        </button>
      </div>
    </div>
  )
}

export default App
