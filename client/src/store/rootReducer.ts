import { combineReducers } from 'redux';
import booksReducer from '../features/Books/redux/booksReducer';
import categoriesReducer from '../features/Categories/redux/categoryReducer';
import mainReducer from '../features/Main/redux/mainReducer';
import authReducer from '../features/Auth/reducer/authReducer';

const rootReducer = combineReducers({
booksState:booksReducer,
categoriesState:categoriesReducer,
loadState:mainReducer,
authState:authReducer
});

export default rootReducer;