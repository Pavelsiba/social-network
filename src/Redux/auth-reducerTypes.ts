export const SET_USER_DATA = 'network/authReducer/SET_USER_DATA'
export const GET_CAPTCHA_URL_SUCCESS = "network/authReducer/GET_CAPTCHA_URL_SUCCESS"
export const STOP_SUBMIT = 'network/authReducer/STOP_SUBMIT'

export type InitialStateType = {
  id: number|null,
  login: string|null,
  email: string|null,
  password:string | null
  isAuth: boolean|null,
  rememberMe: boolean|null,
  captchaUrl: string|null, 
};

export type GetCaptchaUrlSuccessTypePayload={
  captchaUrl: string|null
}

export type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: GetCaptchaUrlSuccessTypePayload
}

export type SetAuthUserDataTypePayload = {
  id: number|null
  login: string|null
  email: string|null
  isAuth: boolean|null
  rememberMe: boolean|null
}

export type SetAuthUserDataActionType = {
type: typeof SET_USER_DATA,
payload: SetAuthUserDataTypePayload
}

export type StopSubmitPayloadType = {
  error: string|null
}

export type StopSubmitActionType = {
  type: typeof STOP_SUBMIT,
  payload: StopSubmitPayloadType
};

//export type InitialStateType = typeof initialState