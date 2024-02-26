/* eslint-disable @typescript-eslint/default-param-last */

import type { StateCategories } from "../type"
import type { Action } from "./action"



const init = {categories:[]}
const categoriesReducer=(state:StateCategories=init,action:Action):StateCategories=>{
    switch (action.type) {
        case 'INIT_GENRE':
            return {
                ...state,
                categories:action.payload
            }
    
        default:
            return state
    }

}
export default categoriesReducer