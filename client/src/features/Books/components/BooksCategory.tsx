import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState} from '../../../store/store';
import BookCard from './BookCard'

function BooksCategory():JSX.Element {
  const books=useSelector((store:RootState)=>store.booksState.books)

  const genres=useSelector((store:RootState)=>store.categoriesState.categories)
    const {name}=useParams()
    const navigate = useNavigate()
    const id = genres.find(el=>el.name === name)
    const arr = books.filter(el=>el.genreId === id.id)
    console.log(arr)
  return (
    <div >
        <p onClick={()=>navigate('-1')}>{'<-назад'}</p>
        {
            arr.map(book =><BookCard book={book} key={book.id}/>)
        }
        </div>
  )
}

export default BooksCategory