import React from 'react'
import Classes from './Users.module.css'
import userPhoto from '../../assets/img/user.png'


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