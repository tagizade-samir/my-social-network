import React from 'react';
import Classes from './Header.module.css';

const Header = () => {
    return(
        <header className={Classes.header}>
          <div className={Classes.back}>
            <img className={Classes.img} src='https://image.flaticon.com/icons/svg/2659/2659980.svg'></img>
          </div>
        </header>
    )
}

export default Header;