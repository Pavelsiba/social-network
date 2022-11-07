import React from 'react';
import s from './nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className={s.nav}>
        <div>
          <NavLink to='/Profile' className = { navData => navData.isActive ? s.active:s.link}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/Dialogs' className = { navData => navData.isActive ? s.active : s.link }>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/News' className = { navData => navData.isActive ? s.active : s.link }>News</NavLink>
        </div>
        <div>
          <NavLink to='/Music' className = { navData => navData.isActive ? s.active : s.link }>Music</NavLink>
        </div>
        <div>
          <NavLink to='/Settings' className = { navData => navData.isActive ? s.active : s.link}>Settings</NavLink>
        </div>
        <div>
          <NavLink to='/Users' className = { navData => navData.isActive ? s.active:s.link}>Users</NavLink>
        </div>
        <div className={s.friends}>
          <h2>friends</h2>
          <div className={s.friendsBlock}>
            <div className={s.friend}></div>
            <div className={s.friend}></div>
            <div className={s.friend}></div>
          </div>
        </div >
      </nav>
);

export default Nav;