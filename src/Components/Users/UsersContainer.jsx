import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import Preloader from "./../../../src/Components/Common/Preloader/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
} from "../../Redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {

    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
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
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress,
  };
};

export default compose (
  connect (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
