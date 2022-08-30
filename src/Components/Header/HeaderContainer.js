import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUser } from "./../../Redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {this.props.authUser()}

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, { authUser })(HeaderContainer);
