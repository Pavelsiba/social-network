import { usersAPI, profileAPI } from "./../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST="DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"; 
const STOP_SUBMIT = 'network/profileReducer/STOP_SUBMIT'

let initialState = {
  postsData: [
    { id: 1, message: "Привет", likeCount: 10 },
    { id: 2, message: "Как дела?", likeCount: 21 },
    { id: 3, message: "Как дела?", likeCount: 21 },
    { id: 4, message: "Как дела?", likeCount: 21 },
  ],
  profile: null,
  status: "",
  error: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 5, message: action.text, likeCount: 0 },
        ],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case DELETE_POST:
      return { ...state, postsData: state.postsData.filter(p=> p.id !==action.postId) };

    case SET_STATUS:
      return { ...state, status: action.status };

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: {...state.profile, photos: action.photos }};

    case STOP_SUBMIT:
    return { ...state, error: action.error };

    default:
      return state;
  }
};

export const addPostAC = (text) => ({
  type: ADD_POST,
  text,
});

export const deletePost = (postId) => ({
  type: SET_USER_PROFILE,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos) => ({
  type: SET_STATUS,
  photos,
});

export const stopSubmit = (error) => ({
  type: STOP_SUBMIT,
  error,
});

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await usersAPI.userProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export const saveProfile = (profile) => async (dispatch, getState)=> {
    let userId = getState().authReducer.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
      dispatch(stopSubmit (''))
    } else { dispatch(stopSubmit (response.data.messages[0]))
      setTimeout(() => {dispatch(stopSubmit (''))}, 5000)
    }
    //return Promise.reject(response.data.messages[0])
};


export default profileReducer;
