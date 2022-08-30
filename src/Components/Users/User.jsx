import React from "react";
import styles from "./users.module.css";
import userPhoto from "../Users/user.png";
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
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
            <button
              disabled={followingInProgress.includes(user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              {" "}
              Unfollow{" "}
            </button>
          ) : (
            <button
              disabled={followingInProgress.includes(user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              {" "}
              Follow{" "}
            </button>
          )}
        </div>
      </span>
      <span>
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
