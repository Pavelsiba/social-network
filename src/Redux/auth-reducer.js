import { authAPI, securityAPI } from "./../api/api";

const SET_USER_DATA = "network/authReducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS  = "network/authReducer/GET_CAPTCHA_URL_SUCCESS";
const STOP_SUBMIT = 'network/authReducer/STOP_SUBMIT'

const initialState = {
  id: null,
  login: null,
  email: null,
  password: null,
  rememberMe: false,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
});

export const stopSubmit = (error) => ({
  type: STOP_SUBMIT,
  payload: {error}
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  
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
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
