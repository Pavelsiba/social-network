import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import Ava from "../../images/avatar.png"
import logo from "../../images/logoss.png"

const Header = ({isAuth, logout, login}) => (
  <div className={s.header}>
    <img src={logo} alt="Логотип" />
    <div className={s.loginBlock}> 
          {isAuth ? <div className={s.login}><img src={Ava} alt={login} />    <button onClick={logout}>Log out</button></div>
                  : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </div>);

export default Header;