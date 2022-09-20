import { authAPI } from "./../api/api";

const SET_USER_DATA = "SET_USER_DATA";
/* const SET_EMAIL = "SET_EMAIL" */

const initialState = {
  id: null,
  login: null,
  email: null,
  password: null,
  rememberMe: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    });
  };

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } 
    });
  };

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false ));
      }
    });
  };



export default authReducer;
