import { set } from "mongoose"
import { useState } from "react"

export default function Login(){
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    })
    const {email, password} = setFormData
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <section className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <input className="block border border-grey-light w-full p-3 rounded mb-4"
             type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="enter email"
            />

            <input   className="block border border-grey-light w-full p-3 rounded mb-4"
             type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="enter email"
            />

            <div className="mb-8 items-center">
                <button type="submit" className=" mb-8 border border-indigo-600">Submit</button>
            </div>
            </form>
            
          
            </section>
            
        </div>
    )
}





