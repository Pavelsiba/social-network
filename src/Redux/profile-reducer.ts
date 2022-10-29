import { usersAPI, profileAPI } from "../api/api";
import {PostType, ProfileType} from "../types/types"
const ADD_POST = "network/profileReducer/ADD-POST";
const DELETE_POST="network/profileReducer/DELETE_POST";
const SET_USER_PROFILE = "network/profileReducer/SET_USER_PROFILE";
const SET_STATUS = "network/profileReducer/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "network/profileReducer/SAVE_PHOTO_SUCCESS"; 
const STOP_SUBMIT = 'network/profileReducer/STOP_SUBMIT'

let initialState = {
  postsData: [
    { id: 1, message: "Привет", likeCount: 10 },
    { id: 2, message: "Как дела?", likeCount: 21 },
    { id: 3, message: "Как дела?", likeCount: 21 },
    { id: 4, message: "Как дела?", likeCount: 21 },
  ] as Array <PostType>,
  profile: null as ProfileType | null,
  status: "",
  error: "",
  newPostText:""
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 5, message: action.text, likeCount: 0 },
        ],
        newPostText:"",
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case DELETE_POST:
      return { ...state, postsData: state.postsData.filter(p=> p.id !==action.postId) };

    case SET_STATUS:
      return { ...state, status: action.status };

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: {...state.profile, photos: action.photos } as ProfileType};

    case STOP_SUBMIT:
    return { ...state, error: action.error };

    default:
      return state;
  }
};

type AddPostACActionType ={
  type: typeof ADD_POST
  text: string
}
export const addPostAC = (text: string):AddPostACActionType => ({
  type: ADD_POST,
  text,
});

type deletePostActionType = {
  type: typeof SET_USER_PROFILE
  postId: number
}
export const deletePost = (postId: number):deletePostActionType => ({
  type: SET_USER_PROFILE,
  postId,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const SetUserProfile = (profile: ProfileType):SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const SetStatus = (status: string):SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SET_STATUS
  photos: string
}
export const savePhotoSuccess = (photos:string):SavePhotoSuccessActionType => ({
  type: SET_STATUS,
  photos,
});

type StopSubmitActionType = {
  type: typeof STOP_SUBMIT,
  error: string
};
export const stopSubmit = (error: string):StopSubmitActionType => ({
  type: STOP_SUBMIT,
  error,
});

export const getUserProfile = (userId:number) => {
  return async (dispatch:any) => {
    let response = await usersAPI.userProfile(userId);
    dispatch(SetUserProfile(response.data));
  };
};

export const getStatus = (userId: number) => {
  return async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(SetStatus(response.data));
  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    try {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
      dispatch(SetStatus(status));
    }} catch (error) {
      console.error(error)
    }
  };
};

export const savePhoto = (file:any) => {
  return async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export const saveProfile = (profile:ProfileType) => async (dispatch: any, getState: any)=> {
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
