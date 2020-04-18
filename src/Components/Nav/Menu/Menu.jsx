import React from 'react';
import Classes from './Menu.module.css'

const Menu = (props) => {
  return (
    <ul className={Classes.list}>{props.menu}</ul>
  )
}

export default Menu;