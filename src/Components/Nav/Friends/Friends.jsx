import React from 'react';
import Classes from './Friends.module.css'

const Friends = (props) => {

    return (
        <div className={Classes.friends}>
            <h2>Friends</h2>
            <div className={Classes.FriendsList}>
                {props.friend}
            </div>
        </div>
    )
}

export default Friends