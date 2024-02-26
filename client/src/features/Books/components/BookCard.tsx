import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import type { Book } from '../type'
import * as api from '../api'


function BookCard({book}:{book:Book}):JSX.Element {
const dispatch=useDispatch()

  const delBook=():void=>{
api.delFetchBook(book.id).then(data=>{
  if(data.message === 'ok'){
    dispatch({type:'DELETE_BOOK',payload:book.id})
  }
}).catch(console.log)
  }
  return (
    <div className='bookCard' data-id = {book.id}>

<div className='contImg'><img src={book.img} alt='...'/></div>
<h3>{book.title}</h3> 
<p>Автор:{book.author}</p>
<p>{book.description}</p>
 <div className='buttonBoks'>
<button className='deleteBook' type='button'  onClick={delBook}>
    delete
    <img className='icons' src='/img/del.gif' alt='...'/>
</button>
<button type='button'>
update
<img className='icons' src='/img/update.gif' alt='...'/>
</button></div>
</div>
  )
}

export default (BookCard)