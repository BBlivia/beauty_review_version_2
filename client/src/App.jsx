//import { useState } from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './layout/Layout'


function App() {
  //const [count, setCount] = useState(0)
 
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
