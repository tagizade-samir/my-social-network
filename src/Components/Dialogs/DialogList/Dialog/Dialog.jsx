import React from 'react'
import Classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;

    return(
        <div className={Classes.dialog}>
            <img src='https://image.flaticon.com/icons/svg/126/126486.svg'></img>
            <NavLink to={path} activeClassName={Classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog