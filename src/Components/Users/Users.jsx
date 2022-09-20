import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({
  page,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {

 
  return <div>
      <Paginator
        currentPage={page}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      /><div>
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
      </div>
    </div>
};

export default Users;
