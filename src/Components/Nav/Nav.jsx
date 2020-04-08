import React from 'react';
import Classes from './Nav.module.css'
import Menu from './Menu/Menu.jsx'

const Nav = () => {
    return(
        <nav className={Classes.menu}>
          <Menu />
        </nav>
    )
}

export default Nav;