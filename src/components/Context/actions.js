import {constants} from "./index"

export const CallSignUp = payload =>{
  return{
    type: constants.CALL_SIGN_UP,
    payload
  }
}
