
import {  useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner"
import { register, reset } from "../../features/auth/authSlice"




import Nav from "../components/Nav"

export default function Signup(){

    
    
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: "",
        password2: ""
    })

    const {userName, email, password, password2} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector
    (
        (state)=> state.auth
    )

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    

    const onSubmit = (e) =>{
        e.preventDefault()
        
        if(password != password2){
            toast.error('Passwords do not match')
        }else{
            const userData = {
                userName,
                email,
                password,
                password2
            }
            dispatch(register(userData))
        }
    }

        if(isLoading){
            return <Spinner />
        }


    return(
        <>
            
            <section className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form  onSubmit={onSubmit}
                className="bg-white px-6 py-8 rounded shadow-md text-black w-full" >
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        id="userName" 
                        name="userName"
                        value={userName}
                        placeholder="please enter a username"
                        onChange={onChange}  />

                    <input type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        id="email" 
                        name="email" 
                        value={email}
                        placeholder="please enter a email"
                        onChange={onChange}
                      />

                    <input type="password" 
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        id="password" 
                        name="password" 
                        value={password}
                        placeholder=" enter password"
                        onChange={onChange}
                       />
                    <input type="password" 
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        id="password2" 
                        name="password2" 
                        value={password2}
                        placeholder="confirm password"
                        onChange={onChange}
                     />

                    <div className="mb-8 items-center">
                        <button type="submit" className=" mb-8 bg-red border border-indigo-600">Submit</button>
                    </div>
                    
                </form>
                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue text-blue" to={'/login'}>
                        Log in
                    </Link>
                </div>
                </div>
             </section>
        </>
       
    )
}
