//import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"
import Layout from "./Layout/Layout"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App
