import React from 'react';
import Friend from './Friend/Friend.jsx'
import Friends from './Friends'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        friend: state.nav.navFriends.map(item => <Friend name={item.name} id={item.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer