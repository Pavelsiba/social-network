import {usersAPI} from "../api/api";
import {updateObjectInArray} from '../Components/Utilits/object-helpers'
import {UsersType} from "../Types/types"

const FOLLOW = "network/usersReducer/FOLLOW";
const UNFOLLOW = "network/usersReducer/UNFOLLOW";
const SET_USERS = "network/usersReducer/SET_USERS";
const SET_CURRENT_PAGE = "network/usersReducer/SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "network/usersReducer/TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "network/usersReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "network/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [] as Array <UsersType>,
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, // Array of users ID
};

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId,'id', {followed: true})
        /* state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }) */
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId,'id', {followed: false})
        /* state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }), */
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, page: action.page };
    }

    case TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

type FollowAcceptActionType = {
  type: typeof FOLLOW,
  userId: number
};
const followAccept = (userId:number):FollowAcceptActionType => ({
  type: FOLLOW,
  userId,
});

type UnFollowAcceptActionType = {
  type: typeof UNFOLLOW,
  userId: number
};
export const unfollowAccept = (userId:number):UnFollowAcceptActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS,
  users: UsersType
}
export const setUsers = (users:UsersType):SetUsersActionType => ({
  type: SET_USERS,
  users
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  page: number
}
export const setCurrentPage = (page:number):SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  page,
});

type SetTotalUsersCountActionType ={
  type: typeof TOTAL_USERS_COUNT,
  count: number
}
export const setTotalUsersCount = (count:number):SetTotalUsersCountActionType => ({
  type: TOTAL_USERS_COUNT,
  count,
});

type SetToggleIsFetchingActionType ={
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}
export const setToggleIsFetching = (isFetching:boolean):SetToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page:number, pageSize:number) => {
  return async (dispatch:any) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const FollowUnfollowFlow = async (
  dispatch:any,
  userId:number,
  apiMethod:any,
  actionCreator:any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId:number) => {
  return async (dispatch:any) => {
    FollowUnfollowFlow(
      dispatch,
      userId,
      await usersAPI.follow.bind(usersAPI),
      followAccept
    );
  };
};

export const unfollow = (userId:number) => {
  return async (dispatch:any) => {
    FollowUnfollowFlow(
      dispatch,
      userId,
      await usersAPI.unfollow.bind(usersAPI),
      unfollowAccept
    );
  };
};

export default usersReducer;
