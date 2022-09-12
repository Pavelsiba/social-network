import { usersAPI } from "./../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_EMAIL = "SET_EMAIL"

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  loginEmail: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_EMAIL:
      return {
        ...state,
        loginEmail:  action.email,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  email
});

export const authUser = () => (dispatch) => {
    usersAPI.authUser().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  };

export default authReducer;
