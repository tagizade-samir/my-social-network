import React from 'react';
import Classes from './Friends.module.css'
import Friend from './Friend/Friend.jsx'

const Friends = (props) => {
    let friend = props.state.map(item => <Friend name={item.name} id={item.id} />)

    return (
        <div className={Classes.friends}>
            <h2>Friends</h2>
            <div className={Classes.FriendsList}>
                {friend}
            </div>
        </div>
    )
}

export default Friends