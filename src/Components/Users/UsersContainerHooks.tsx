import Users from "./Users";
import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import {
  follow,
  unfollow,
  //setCurrentPage,
  requestUsers,
} from "../../Redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../Redux/users-selectors'
import {UserType} from "../../Types/types"
import {AppStateType} from "../../Redux/Redux-store"

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount:number
  users:Array<UserType> 
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  requestUsers:(currentPage:number, pageSize:number)=>void
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void 
 // setCurrentPage:(pageNumber:number)=>void
  
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: FC<PropsType> = (props) => {

  const {currentPage, pageSize,requestUsers} = props
  
  useEffect (() => {
    requestUsers(currentPage, pageSize);
  },[currentPage, pageSize, requestUsers])

  const onPageChanged = (pageNumber:number) => {
    const {pageSize} = props
    //props.setCurrentPage(pageNumber);
    props.requestUsers(pageNumber, pageSize);
  };

    return (
      <>
        {props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={onPageChanged}
          users={props.users}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      </>
    );
  }
 // toggleFollowingProgress={props.toggleFollowingProgress}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose <PropsType>(
//  TStateProps = {}, TDispatchProps = {}, TOwnProps = {}
  connect<MapStatePropsType, MapDispatchPropsType, null> (mapStateToProps, {
    follow,
    unfollow,
    //setCurrentPage,
    requestUsers,
  }),
  withAuthRedirect)
(UsersContainer);
