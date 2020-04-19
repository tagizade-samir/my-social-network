import React from 'react'
import Classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={Classes.container}>
                            <span>
                                <div>
                                    <img className={Classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>Azerbaijan, Baku</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users