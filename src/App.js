import React, { useState, useEffect } from 'react'
import logo from './PNG image 58.png';
import './App.css';

function App() {
  const [value, setValue] = useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchQuotes() {
    try {
      setLoading(true)
      const response = await fetch("https://type.fit/api/quotes")
      const quotes = await response.json();
      const randNum = Math.floor(Math.random() * (quotes.length))
      const randQuote = quotes[randNum].text
      const randAuth = quotes[randNum].author
      const value = (
        <div
          style={{
            width: '60%',
            margin: 'auto',
            backgroundColor: 'purple',
            padding:'20px',
            minHeight: '100px'
          }}
        >
          <div> {randQuote} </div>
          <br />
          <div> {randAuth} </div>
        </div>
      )
      setValue(value)
    } catch (e) {
      setErr(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> to get cool quotes at random
        </p>
        <h1>Quote Generator</h1>
        <button type='button' onClick={fetchQuotes}> Quote Me </button>
        <p>
          {loading ? 'loading...' : value}
        </p>
      </header>
    </div>
  );
}

export default App;
