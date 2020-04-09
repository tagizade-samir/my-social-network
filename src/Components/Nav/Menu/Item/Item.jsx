import React from 'react';
import Classes from './Item.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return(
      <li className={Classes.item}>
        <NavLink to={`/${props.link}`} activeClassName={Classes.activeLink}>{props.name}</NavLink>
      </li>
    )
}

export default Item;