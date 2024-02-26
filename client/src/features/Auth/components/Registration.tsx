import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../api'
import type { RootState } from '../../../store/store'

function Registration():JSX.Element {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')

    const dispatch = useDispatch()
    const message = useSelector((store:RootState)=>store.authState.message)

const registration = (e:React.FormEvent<HTMLFormElement>):void=>{
e.preventDefault()
if(password === password2){
    api.registrationFetch({name,email,password}).then(data=>dispatch({type:'auth/registration',payload:data}))
    .catch(console.log)
}else{
    dispatch({type:'auth/registration',payload:{message:' Ваши пароли не совпадают'}})
}

}

  return (
    <div className='contAuth'>
    <form className='registration' onSubmit={registration}>
        <input type='text' value={name} placeholder='name' required onChange={(e)=>setName(e.target.value)}/>
        <input type='email' value={email} placeholder='email' required onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <input type='password' value={password2} placeholder='erPassword' required onChange={(e)=>setPassword2(e.target.value)}/>
        <button type='submit'>registration</button>
    </form>
    <div className='errRega err' >{message}</div>
</div>
  )
}

export default Registration