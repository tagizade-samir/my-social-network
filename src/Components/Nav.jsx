import React from 'react';

const Nav = () => {
    return(
        <nav className='nav_menu'>
          <ul className='nav_menu_list'>
            <li className='nav_menu_list_item'>
              <a href='#'>Profile</a>
            </li>
            <li className='nav_menu_list_item'>
              <a href='#'>Messages</a>
            </li>
            <li className='nav_menu_list_item'>
              <a href='#'>News</a>
            </li>
            <li className='nav_menu_list_item'>
              <a href='#'>Music</a>
            </li>
            <li className='nav_menu_list_item'>
              <a href='#'>Settings</a>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;