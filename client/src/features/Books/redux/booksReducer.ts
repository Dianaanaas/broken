/* eslint-disable @typescript-eslint/default-param-last */
import type { StateBooks } from "../type"
import type { Action } from "./action"



const init = {books:[]}
const booksReducer=(state:StateBooks=init,action:Action):StateBooks=>{
    switch (action.type) {
        case 'INIT_BOOKS':
        
      return {
        ...state,
        books:action.payload
      }
      case 'ADD_BOOK':
        return{
            ...state,
            books: [action.payload]
        }
        case 'DEL_BOOK':
            return{
                ...state,
                books:state.books.filter(id=> +id !== action.payload)
            }
    
        default:
            return state
    }

}
export default booksReducer