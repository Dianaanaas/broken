import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState} from '../../../store/store';


function CategoriesList():JSX.Element {
  const genres=useSelector((store:RootState)=>store.categoriesState.categories)
  
  
  return (
    <div className='list'>
        {genres.map(el=><Link  key='el.id' to={`/books/${el.id}`}>{el.name}</Link>)}
    </div>
  )
}

export default CategoriesList