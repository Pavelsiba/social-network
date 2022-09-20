import Profile from "./Profile";
import React from "react";
import { getUserProfile, getStatus, updateStatus} from "./../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorisedUserId
     /*  userId = 2; //25683 */
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => ({ 
profile: state.profileReducer.profile, 
status: state.profileReducer.status,
authorisedUserId: state.authReducer.id,
isAuth: state.authReducer.isAuth });

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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

