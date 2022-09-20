import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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

export const followAccept = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAccept = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setTotalUsersCount = (count) => ({
  type: TOTAL_USERS_COUNT,
  count,
});

export const setToggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
      dispatch(setToggleIsFetching(true));
      dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setToggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followAccept(userId));
      }

      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowAccept(userId));
      }

      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
