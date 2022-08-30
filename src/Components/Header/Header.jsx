import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => (<header className={s.header}>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Color-Skyrim-Logo-768x567.jpg"
          alt="Логотип реакта"
        />

      <div className={s.loginBlock}> 
      {props.isAuth? props.login: 
        <NavLink to={'/login'}>Login</NavLink>}

      </div>

      </header>);

export default Header;