import React from 'react';
import Classes from './Post.module.css'

const Post = (props) => {
    return(
      <div className={Classes.item}>
        <img className={Classes.itemImg} src='https://image.flaticon.com/icons/svg/323/323329.svg'></img>
        <p className={Classes.itemText}>{props.message}</p>
      </div>
    )
}

export default Post