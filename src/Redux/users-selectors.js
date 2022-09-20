export const getUsers = (state)=> {
    return state.usersReducer.users
}
export const getPageSize = (state)=> {
    return state.usersReducer.pageSize
}
export const getTotalUsersCount = (state)=> {
    return state.usersReducer.totalUsersCount
}
export const getPage = (state)=> {
    return state.usersReducer.page
}
export const getIsFetching = (state)=> {
    return state.usersReducer.isFetching
}
export const getFollowingInProgress = (state)=> {
    return state.usersReducer.followingInProgress
}
