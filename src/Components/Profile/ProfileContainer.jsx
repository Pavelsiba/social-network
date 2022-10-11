import Profile from "./Profile";
import React from "react";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from "./../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId; // Димыч id userId = 2; // мой id 25683
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
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
