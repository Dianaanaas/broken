import React, { useContext, useEffect } from 'react'
import BookCard from './BookCard.tsx'
import '../books.css'
import BookAdd from './BookAdd.tsx'
import * as api from '../api.ts'
import type { RootState} from '../../../store/store.ts'
import { useDispatch, useSelector } from 'react-redux'

function BooksList():JSX.Element {
const dispatch = useDispatch()

const books=useSelector((store:RootState)=>store.booksState.books)
const loading=useSelector((store:RootState)=>store.loadState.loading)
const genres=useSelector((store:RootState)=>store.categoriesState.categories)

    useEffect(()=>{
    api.initFetchBooks().then(data=>dispatch({type:'INIT_BOOKS',payload:data}))
    .catch(console.log)
    api.initFetchGenres().then(data=>dispatch({type:'INIT_GENRES',payload:data}))
    .catch(console.log)
    },[])


  return (
    <div>
    {  loading ? <div className='contImgLoad'><img alt='...' src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'/></div> :
  <> <BookAdd genres={genres} />
    <div className='list'>
        {
        books.map(book =><BookCard book={book} key={book.id} />)
        }
    </div></>}
    </div>
  )
}

export default BooksList