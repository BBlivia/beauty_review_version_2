import { useState } from "react"
import { Link } from "react-router-dom"


export default function Nav(){
    const [hiddenMenu, setHiddenMenu] = useState(true)
    
    return(
        
        <div>
            <nav className="bg-gray-50">
                <div className="px-8 mx-auto border ">
                    <div className="flex justify-between">
                    <div className="flex items-center space-x-4"> 
                        <Link className="py-5 px-3 font-bold" to={"/"}> Beauty Review </Link> 
                    </div>
                    <div className=" hidden md:flex items-center space-x-1">
                        <Link className="py-5 px-3 hover:text-gray-900 " to={"/login"}>Login</Link>
                        <Link className="py-2 px-3 hover:bg-blue-200 hover:text-black-900 bg-blue-400 text-white rounded" to={"/register"}>Signup</Link>
                        </div>
                   
                    <div className="md:hidden flex items-center ">
                     
                        <button className="mobile-menu-button" onClick={() => setHiddenMenu(!hiddenMenu)}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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


        /* sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px' */

        
    )
}