import React from 'react'
import Classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import { followAPI } from '../../API/Api'


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pages.map(page => {
          return (
            <span onClick={() => { props.onPageChange(page) }}
              className={props.currentPage === page && Classes.selectedPage}>
              {page}
            </span>
          )
        })}
      </div>
      {props.users.map(user => {
        return (
          <div key={user.id} className={Classes.container}>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={Classes.userPhoto}
                  src={user.photos.small != null ? user.photos.small : userPhoto} />
              </NavLink>
            </div>
            <div>
              {user.followed ?
                <button
                  disabled={props.followingInProgress.some(id => id == user.id)}
                  onClick={() => { props.unfollowSuccess(user.id) }}>Unfollow</button>
                : <button
                  disabled={props.followingInProgress.some(id => id == user.id)}
                  onClick={() => { props.followSuccess(user.id) }}>Follow</button>}
            </div>
            <div>
              <p>{user.name}</p>
              <p>{user.status}</p>
              <p>Azerbaijan, Baku</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users