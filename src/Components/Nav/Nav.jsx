import React from 'react';
import Classes from './Nav.module.css'
import Menu from './Menu/Menu.jsx'
import Friends from './Friends/Friends.jsx'

const Nav = (props) => {
    return(
        <nav className={Classes.menu}>
          <Menu navItems={props.state.navItems} />
          <Friends state={props.state.navFriends} />
        </nav>
    )
}

export default Nav;