/* import logo from './logo.svg'; */
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Nav from "./Components/Nav/nav";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModalWindow from './Components/Common/ModalWindow/delo'
import React, { Component, Suspense } from "react";
import { getAuthUserData } from "./Redux/auth-reducer";
import { connect } from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const ProfileContainerHooks = React.lazy(() =>
  import("./Components/Profile/ProfileContainerHooks")
);
const Login = React.lazy(() =>
  import("./Components/Login/login")
);

class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">
            <Suspense fallback={ <div> <Preloader /></div> }>
              <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/Dialogs" element={<DialogsContainer />} />
                <Route path="/Profile/:userId" element={<ProfileContainerHooks />} />
                <Route path="/Profile/" element={<ProfileContainerHooks />} />
                <Route path="/Users" element={<UsersContainer />} />
                <Route path="/Music" element={<Music />} />
                <Route path="/News" element={<News />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/ModalWindow" element={<ModalWindow />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { getAuthUserData })(App);

/* const SamuraiJs = (props) => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
 */
