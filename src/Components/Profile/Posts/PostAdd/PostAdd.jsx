import React from 'react';
import Classes from './PostAdd.module.css'
import {addPostActioncreator, updateNewPosrTextAction} from '../../../../Redux/State'

const PostAdd = (props) => {
  let newPostElement = React.createRef();

  let addP = () => {
    props.dispatch(addPostActioncreator())
  }

  let postAddOnChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPosrTextAction(text))
  }

  return (
    <div className={Classes.head}>
      <div className={Classes.headTitle}>
        My posts
        </div>
      {/*<form>*/}
      <div className={Classes.headInputWrap}>
        <textarea
          ref={newPostElement}
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