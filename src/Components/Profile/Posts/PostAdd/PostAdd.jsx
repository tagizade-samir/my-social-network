import React from 'react';
import Classes from './PostAdd.module.css'

const PostAdd = (props) => {

  let addP = () => {
    props.addP()
  }

  let postAddOnChange = (e) => {
    let text = e.target.value
    props.postAddOnChange(text)
  }

  return (
    <div className={Classes.head}>
      <div className={Classes.headTitle}>
        My posts
        </div>
      {/*<form>*/}
      <div className={Classes.headInputWrap}>
        <textarea
          onChange={postAddOnChange}
          className={Classes.headInput}
          value={props.newPostText} />
        <button onClick={addP} className={Classes.btn}>Send</button>
      </div>
      {/*</form>*/}
    </div>
  )
}

export default PostAdd