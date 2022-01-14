import { constants } from "./index"

const initState = {
    callSignUp: 0
} 

const reducer = (state, action) =>{
    switch(action.type){
        case constants.CALL_SIGN_UP:
            return{
                ...state,
                callSignUp: action.payload
            }
        default:
            throw new Error('Invalid action.')
    }
}

export {initState}
export default reducer