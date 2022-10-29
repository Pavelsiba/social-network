import Users from "./Users";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../Redux/users-reducer.ts";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getPage, getIsFetching, getFollowingInProgress} from '../../Redux/users-selectors'

const UsersContainer = (props) => {

  const {page, pageSize, requestUsers} = props
  
  useEffect (() => {
    requestUsers(page, pageSize);
  },[page, pageSize, requestUsers])

  const onPageChanged = (pageNumber) => {
    const {pageSize} = props
    props.setCurrentPage(pageNumber);
    props.requestUsers(pageNumber, pageSize);
  };

    return (
      <>
        {props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          page={props.page}
          onPageChanged={onPageChanged}
          users={props.users}
          follow={props.follow}
          unfollow={props.unfollow}
          toggleFollowingProgress={props.toggleFollowingProgress}
          followingInProgress={props.followingInProgress}
        />
      </>
    );
  }


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    page: getPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose (
  connect (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
  }),
  withAuthRedirect
)(UsersContainer);
