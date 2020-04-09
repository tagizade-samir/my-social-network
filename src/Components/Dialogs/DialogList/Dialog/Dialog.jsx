import React from 'react'
import Classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return(
        <div className={Classes.dialog}>
            <NavLink to={`/${props.link}`} activeClassName={Classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog