import React from 'react';
import Classes from './Menu.module.css'
import Item from './Item/Item.jsx'

const Menu = (props) => {

 let menu = props.navItems.map(item => <Item link={item.link} name={item.name}/>)

    return(
      <ul className={Classes.list}>
        {menu}
      </ul>
    )
}

export default Menu;