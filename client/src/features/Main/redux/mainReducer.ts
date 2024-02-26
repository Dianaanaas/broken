/* eslint-disable @typescript-eslint/default-param-last */

import type { StateMain } from "../type"
import type { Action } from "./actionType"





const init = {loading:true}
const mainReducer=(state:StateMain=init,action:Action):StateMain=>{
    switch (action.type) {
        case 'STOP_LOADING':
            return{
              ...state,
              loading:false
            }
    
        default:
            return state
    }

}
export default mainReducer