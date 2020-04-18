import React from 'react';
import Classes from './Nav.module.css'
import MenuContainer from './Menu/MenuContainer'
import FriendsContainer from './Friends/FriendsContainer.jsx'

const Nav = () => {
    return(
        <nav className={Classes.menu}>
          <MenuContainer />
          <FriendsContainer />
        </nav>
    )
}

export default Nav;