import React from 'react'
import { NavLink } from 'react-router-dom'
import '../main.css'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'



function Header():JSX.Element {
const user = useSelector((store:RootState)=>store.authState.user)
  return (
    <nav className='nav'>
        <NavLink to='/'>Книги</NavLink>
        <NavLink to='/categories'> Жанры</NavLink>
       {!user && <NavLink to='/registration'> Регистрация</NavLink>}
    </nav>
  )
}

export default Header