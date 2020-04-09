import React from 'react';
import Classes from './Menu.module.css'
import Item from './Item/Item.jsx'

const Menu = () => {
    return(
      <ul className={Classes.list}>
        <Item link='profile' name='Profile'/>
        <Item link='dialogs' name='Dialogs'/>
        <Item link='news' name='News'/>
        <Item link='music' name='Music'/>
        <Item link='settings' name='Settings'/>
      </ul>
    )
}

export default Menu;