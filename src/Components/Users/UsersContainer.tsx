import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../Redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../Redux/users-selectors'
import { UserType } from "../../Types/types";

type PropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount:number
  users:Array<UserType>
  setCurrentPage:(CurrentPage:number)=>void
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void
  getUsers:(currentPage:number, pageSize:number)=>void
  followingInProgress:Array<number>
}

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber:number) => {
    const {pageSize}=this.props
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, pageSize);
  };
  
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    CurrentPage: getCurrentPage(state),
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
(UsersContainer));
