
import Nav from "./components/Nav"
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"


export default function Layout(){
    return(
       <div>
        < Nav />
        <Routes>
         <Route path='/' element={<Home/>} />
          < Route path="/login" element={ <Login />} /> 
          < Route path="/register" element={ <Signup />} /> 
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
          
            
       </div>
    )
}