import React from 'react'
import Classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'


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
            <span
              onClick={() => { props.onPageChange(page) }}
              className={props.currentPage === page && Classes.selectedPage}>
              {page}
            </span>
          )
        })}
      </div>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={Classes.container}>
              <span>
                <div>
                  <NavLink to={'/profile/' + user.id}>
                    <img className={Classes.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} />
                  </NavLink>
                </div>
                <div>
                  {user.followed
                    ? <button onClick={() => {
                      axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY' : 'd866ea22-117a-4f1c-b91e-45e0c6e7f648'
                        }
                      })
                      .then(response => {
                          if (response.data.resultCode == 0) {
                            props.unfollow(user.id)
                          }
                      })
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      axios
                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                        withCredentials: true,
                        headers: {
                          'API-KEY' : 'd866ea22-117a-4f1c-b91e-45e0c6e7f648'
                        }
                      })
                      .then(response => {
                          if (response.data.resultCode == 0) {
                            props.follow(user.id)
                          }
                      })
                    }}>Follow</button>}
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