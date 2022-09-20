import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logout } from "./../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, {logout })(HeaderContainer);


// 80 выпуск. Но все работает без промисов. При вылогинивании страница профиля 
// дизейблится и становится недоступной (вроде все работает как надо). Подправить валидацию формы со стейтом