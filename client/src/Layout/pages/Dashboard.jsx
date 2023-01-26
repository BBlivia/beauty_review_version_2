import Review from '../components/Review'

import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'


export default function Dashboard(){
    const navigate = useNavigate()
const {user} = useSelector((state) => state.auth)

useEffect(() =>{
    if(!user){
        navigate('/login')
    }
}, [user, navigate])
    return(
        <div>
            <Review />
        </div>
    )
}