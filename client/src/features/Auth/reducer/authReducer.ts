/* eslint-disable @typescript-eslint/default-param-last */
import type { StateAuth } from "../type"
import type { Action } from "./actionType"

const init = {user:null,message:''}
const authReducer = (state:StateAuth=init,action:Action):StateAuth=>{
switch (action.type) {
    case 'auth/registration':
        
if(action.payload.message === 'ok'){
    return {...state,user:action.payload.user}
}
    return {...state,message:action.payload.message}


    default:
        return state
}
}
export default authReducer