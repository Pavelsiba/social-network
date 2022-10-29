import {getAuthUserData} from "./auth-reducer"
import { authAPI } from "../api/api";

const INITIALIZED_SUCCESS = "network/appReducer/INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean
} 

type ActionType = initializedSuccessActionType

const initialState: InitialStateType = {
  initialized: false}
 
const AppReducer = (state = initialState, action: ActionType):InitialStateType => {
  switch (action.type) {
 
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
})

export const initializeAPP = () => (dispatch:any) => {

  let promise = dispatch (getAuthUserData());

  Promise.all([promise])
        .then(()=>{
          dispatch (initializedSuccess())})}
  

export default AppReducer;
