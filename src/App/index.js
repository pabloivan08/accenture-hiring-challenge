import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI'
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch(error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return <div>An error occurred: {error.message}</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }

  const dataArray = data.toArray
  return (
    <AppUI 
      data={data}
    />
  );
}

export default App;
