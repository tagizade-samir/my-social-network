import React from 'react';
import Classes from './PostAdd.module.css'

const PostAdd = () => {
    return(
      <div className={Classes.head}>
        <div className={Classes.headTitle}>
          My posts
        </div>
        <form>
          <div className={Classes.headInputWrap}>
              <input className={Classes.headInput}></input>
              <button className={Classes.btn}>Send</button>
          </div>
        </form>
      </div>
    )
}

export default PostAdd