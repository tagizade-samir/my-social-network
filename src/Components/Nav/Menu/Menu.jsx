import React from 'react';
import Classes from './Menu.module.css'
import Item from './Item/Item.jsx'

const Menu = () => {
    return(
      <ul className={Classes.list}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    )
}

export default Menu;