import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/api/jokes")
        setData(response.data)
        
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])
console.log(data)
  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!data) return <div>No data available</div>

  return (
    <div className="app">
      <h1>Name : {data.name || "N/A"}</h1>
      <h3>Age : {data.age || "N/A"}</h3>
      <h4>Message : {data.message || "N/A"}</h4>
    </div>
  )
}

export default App