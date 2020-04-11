import React from 'react';
import Classes from './Friend.module.css'

const Friend = (props) => {

    return (
        <div className={Classes.friend}>
            <img className={Classes.friendsAvatar} src='https://image.flaticon.com/icons/svg/149/149114.svg' />
            <p>Name: {props.name}</p>
        </div>
    )
}

export default Friend