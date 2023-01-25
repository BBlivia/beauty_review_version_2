import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//this is for logout
import { useSelector, useDispatch } from "react-redux"
import {logout, reset} from '../../features/auth/authSlice'


export default function Nav(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    const onLogout =()=>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }
    const [hiddenMenu, setHiddenMenu] = useState(true)

    //for logout 
    
    return(
        
        <div>
            <nav className="bg-gray-50">
                <div className="px-8 mx-auto border ">
                    <div className="flex justify-between">
                    <div className="flex items-center space-x-4"> 
                        <Link className="py-5 px-3 font-bold" to="/"> Beauty Review </Link> 
                    </div>

                    {user ? (<button onClick={onLogout} className="py-5 px-3 hover:text-gray-900 ">Logout</button>) : (
                    <>
                        <div className=" hidden md:flex items-center space-x-1">
                        <Link className="py-5 px-3 hover:text-gray-900 " to={'/login'}>Login</Link>
                        <Link className="py-2 px-3 hover:bg-blue-200 hover:text-black-900 bg-blue-400 text-white rounded" to={"/register"}>Signup</Link>
                     </div>
                    
                    </>
                    )}
                    
                   
                    <div className="md:hidden flex items-center ">
                     
                        <button className="mobile-menu-button" onClick={() => setHiddenMenu(!hiddenMenu)}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        </button>

                    </div>
                    </div>
                    {hiddenMenu && (<div  className="mobile-menu hidden">
                    <a className=" block py-2 text-sm px-2 hover:text-gray-200 " href="">Login</a>
                        <a className=" block text-sm py-2 px-2 hover:text-gray-200 " href="">About</a>
                        
                    </div>)}
                    
                    
                </div>
                 
                 
                
            </nav>
        </div>
       

        
                      
        
    )
}
