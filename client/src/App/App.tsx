
import React, { useEffect, useMemo, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useTheme from '../features/Books/Thema'
import './App.css';
import BooksList from '../features/Books/components/BooksList';

import Main from '../features/Main/components/Main';
import CategoriesList from '../features/Categories/component/CategoriesList';
import BooksCategory from '../features/Books/components/BooksCategory';
import Registration from '../features/Auth/components/Registration';

function App(): JSX.Element {


const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch({type:'STOP_LOADING'}), 2000);
  }, []);


  return (
    <div className='App light'>
 
    <Routes>
      <Route path='/' element={<Main />}>
       <Route index element={<BooksList/>}/>
       <Route  path='registration' element={<Registration/>}/>
       <Route  path='categories' element={<CategoriesList/>}/>
       <Route path='books/:name' element={<BooksCategory/>}/>
      </Route>
    </Routes>
 

    </div>
  );
}

export default App;
