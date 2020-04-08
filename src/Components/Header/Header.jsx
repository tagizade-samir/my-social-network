import React from 'react';
import Classes from './Header.module.css';

const Header = () => {
    return(
        <header className={Classes.header}>
          <div className={Classes.back}>
            <img className={Classes.img} src='https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png'></img>
          </div>
        </header>
    )
}

export default Header;