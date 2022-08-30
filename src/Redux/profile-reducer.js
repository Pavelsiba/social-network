import { usersAPI } from "./../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Привет", likeCount: 10 },
    { id: 2, message: "Как дела?", likeCount: 21 },
    { id: 3, message: "Как дела?", likeCount: 21 },
    { id: 4, message: "Как дела?", likeCount: 21 },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.text,
        likeCount: 0,
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPostActionCreater = (text) => ({
  type: ADD_POST,
  text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.userProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
