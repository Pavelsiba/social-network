import React, {FC} from "react";
import styles from "./users.module.css";
import userPhoto from "../Users/user.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {UserType} from "../../Types/types"

type PropsType = {
  user: UserType
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void 
  followingInProgress: Array<number>
}


const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"./../profile/" + user.id}>
            {" "}
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={styles.userPhoto}
              alt="Какой-то чел"
            />{" "}
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <StyledFollowButton  disabled={followingInProgress.includes(user.id)}
                    onClick={() => {unfollow(user.id)}}>
                    Unfollow
            </StyledFollowButton>
          ) : (
            <StyledFollowButton disabled={followingInProgress.includes(user.id)}
                    onClick={() => {follow(user.id)}}> 
                    Follow
            </StyledFollowButton>)}
        </div>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>

        {/* <div>{user.location.country}</div>
              <div>{user.location.city}</div>
   */}
      </span>
    </div>
  );
};

export default User;

/* function FollowedButton ({content}) {

  return <StyledFollowButton>{content}</StyledFollowButton>
}
 */

const StyledFollowButton = styled.button`
  
  margin-left: 10px;
	box-sizing: border-box;
  width: 130px;
  color: #fff;
  font-family: 'Genericons';
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  border-radius: 6px;
  background-color: #00a9f1;
  cursor: pointer;
  transition: all 0.7s ease;
  &:hover {
    background-color: #0085be;
  }
`;

