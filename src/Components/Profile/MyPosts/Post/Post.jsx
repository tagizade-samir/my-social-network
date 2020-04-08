import React from 'react';
import Classes from './Post.module.css'

const Post = () => {
    return(
      <div className={Classes.item}>
        <img className={Classes.itemImg} src='https://image.flaticon.com/icons/svg/323/323329.svg'></img>
        <p className={Classes.itemText}>Hey, that's my first post</p>
      </div>
    )
}

export default Post