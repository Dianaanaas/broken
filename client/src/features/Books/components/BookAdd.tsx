import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type {  Genre } from '../../Categories/type'
import * as api from '../api'


function BookAdd({genres}:{genres:Genre[]}):JSX.Element {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [img,setImg] = useState('')
    const [author,setAuthor] = useState('')
    const [genreId,setGenreId] = useState('')

const dispatch = useDispatch()

    const addBookFetch =  (e:React.FormEvent<HTMLFormElement>):void=>{
      e.preventDefault()
      api.addFetchBook({
        title,img,author,description,genreId:+genreId || genres[0].id
      }).then(data=>dispatch({type:'ADD-BOOK',payload:data}))
      .catch(console.log())
  
       setAuthor('')
    }
 
  return (
    <div>
        <form onSubmit={addBookFetch} className='form'>
        <select name='genreId' onChange={(e)=>setGenreId(e.target.value)} value={genreId}>
               {genres.map(el=><option key={el.id} value={el.id}>{el.name}</option>)}
            </select>
            <input value={title} placeholder='title' required onChange={(e)=>setTitle(e.target.value)} />
            <input value={description} placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
            <input value={img} placeholder='img' onChange={(e)=>setImg(e.target.value)}/>
            <input value={author} placeholder='author' onChange={(e)=>setAuthor(e.target.value)}/>
            <button type='submit'>add<img className='icons' src='/img/add.gif' alt='...'/></button>
        </form>
    </div>
  )
}

export default BookAdd