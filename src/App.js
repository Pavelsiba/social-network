/* import logo from './logo.svg'; */
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Nav from "./Components/Nav/nav";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Login from "./Components/Login/login";
import { Component } from "react";
import { getAuthUserData } from "./Redux/auth-reducer";
import { connect } from "react-redux";
/* import LoginContainer from "./Components/Login/LoginContainer"; */

class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/Dialogs" element={<DialogsContainer />} />
              <Route path="/Profile/:userId" element={<ProfileContainer />} />
              <Route path="/Profile/" element={<ProfileContainer />} />
              <Route path="/Users" element={<UsersContainer />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/News" element={<News />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { getAuthUserData })(App);
