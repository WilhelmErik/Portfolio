
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
function App() {
 
const [click,setClick]= useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <div style={{textAlign:"center"}}>
    {/* {click} */}
    
      <h1>Portfolio</h1>
      <h2>Under construction...</h2>
      {/* <button onClick={()=>setClick(prev=>prev+1)}> Increment</button> */}
      </div>
    </>
  )
}

export default App
