import React from 'react';
import Classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={Classes.header}>
          <div className={Classes.back}>
            <img className={Classes.img} src='https://image.flaticon.com/icons/svg/2659/2659980.svg'></img>
          </div>
          <div className={Classes.loginBlock}>
            {props.isAuth
              ? <div>
                  Login: {props.login}
                  <button
                    onClick={props.logoutUser} >Logout</button>
                </div>
              : <NavLink className={Classes.loginBtn} to={'/login'}>Login</NavLink> }
          </div>
        </header>
    )
}

export default Header;