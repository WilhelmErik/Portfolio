
import { useState } from 'react'
import './App.css'

function App() {
 
const [click,setClick]= useState(0)

  return (
    <>
    {click}
      <h1>Portolio</h1>
      <h2>Under construction...</h2>
      <button onClick={()=>setClick(prev=>prev+1)}> Increment</button>
    </>
  )
}

export default App
