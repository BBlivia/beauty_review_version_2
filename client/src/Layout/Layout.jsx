import {Routes, Route} from "react-router-dom"


import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function Layout(){
    return(
        <div>
            <Nav />
            <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
        </Routes>
        </div>
        
       

    )
}