import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = React.memo ((props) =>  { 
  
  return (
  <div>
    <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} 
                status={props.status} error={props.error} updateStatus={props.updateStatus}
                saveProfile={props.saveProfile} />
    <MyPostsContainer />
  </div>
)});

export default Profile;

