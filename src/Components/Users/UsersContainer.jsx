import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import Preloader from "./../../../src/Components/Common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../Redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getPage, getIsFetching, getFollowingInProgress} from './../../Redux/users-selectors'

class UsersContainer extends React.Component {

  componentDidMount() {
    const {page, pageSize} = this.props
    this.props.requestUsers(page, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize}=this.props
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize);
  };
  
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          page={this.props.page}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
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
