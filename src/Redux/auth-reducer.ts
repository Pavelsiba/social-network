import { authAPI, securityAPI } from "../api/api";
import { 
  InitialStateType, 
  SetAuthUserDataActionType,
  GetCaptchaUrlSuccessActionType,
  StopSubmitActionType,
  SET_USER_DATA,
  GET_CAPTCHA_URL_SUCCESS,
  STOP_SUBMIT 
 } from "./auth-reducerTypes";
 import { ThunkDispatch } from 'redux-thunk'
import { Action } from "redux";

const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  password: null,
  rememberMe: false,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
}   

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType | StopSubmitActionType


const authReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
    case STOP_SUBMIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


export const setAuthUserData= (id:number|null, login:string|null, email:string|null, isAuth:boolean, rememberMe:boolean): SetAuthUserDataActionType =>({
type: SET_USER_DATA,
payload: {id, login, email, isAuth, rememberMe}})

export const getCaptchaUrlSuccess = (captchaUrl:string|null):GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
});

export const stopSubmit = (error:string|null):StopSubmitActionType=> ({
  type: STOP_SUBMIT,
  payload: {error}
});

export const login = (email:string, password:string, rememberMe: boolean, captcha: string) => async (dispatch: any)=> {
  
  let response = await authAPI.login(email, password, rememberMe, captcha)

switch (response.data.resultCode) {
  case 0:  dispatch (getAuthUserData())
            break;
  case 10: dispatch (getCaptchaUrl())
            break;
  default:  dispatch(stopSubmit(response.data.messages[0] || 'Some error'))
}} 
 
export const logout = () => async (dispatch: any)=> {
let response = await authAPI.logout()

if (response.data.resultCode===0) {
  dispatch(setAuthUserData(null,null,null,false, false))
} else {
  dispatch(stopSubmit(response.data.messages[0] ||'Some error'))
}
}

export const getAuthUserData = () => async (dispatch)=> {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch (setAuthUserData (id, login, email, true, true));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;


//ThunkDispatch <Promise<void>,InitialStateType, setAuthUserData: SetAuthUserDataType>

//const SET_USER_DATA = "network/authReducer/SET_USER_DATA"

/* export const setAuthUserData = (id, login, email, isAuth, rememberMe) => ({
type: SET_USER_DATA,
  payload: { id, login, email, rememberMe, isAuth },
}); */


/* export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login (email, password, rememberMe, captcha);
  
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else { 
    if (response.data.resultCode ===10) {
      dispatch(getCaptchaUrl())
    }
    let error = response.data.messages.length > 0 ? 
                  response.data.messages[0] : "Some error"
    dispatch(stopSubmit(error))}
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}; */