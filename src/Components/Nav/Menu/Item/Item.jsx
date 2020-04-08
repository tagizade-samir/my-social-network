import React from 'react';
import Classes from './Item.module.css'

const Item = () => {
    return(
      <li className={Classes.item}>
        <a href='#'>Profile</a>
      </li>
    )
}

export default Item;