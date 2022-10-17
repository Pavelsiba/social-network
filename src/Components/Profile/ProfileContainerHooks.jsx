import Profile from "./Profile";
import React, {useEffect} from "react";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



const ProfileContainer = (props) => {

  const {getUserProfile, getStatus, ...restProps} = props 

  let userId = props.router.params.userId;

  if (!userId) {
      userId = props.authorisedUserId; // Димыч id userId = 2; // мой id 25683
    }

  console.log('render')

  useEffect (() => { 
    getUserProfile(userId);
    getStatus(userId);
  },[userId, getUserProfile, getStatus])
  
  return (
      <Profile
        {...restProps}
        isOwner={!props.router.params.userId}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
    );
  }


let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorisedUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth,
  error:state.profileReducer.error
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
