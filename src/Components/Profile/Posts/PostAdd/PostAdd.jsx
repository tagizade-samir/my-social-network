import React from 'react';
import Classes from './PostAdd.module.css'
import { reduxForm, Field } from 'redux-form'

const PostAddForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} >
      <div className={Classes.headInputWrap}>
        <Field
          name={'postAdd'}
          component={'textarea'}
          className={Classes.headInput} />
        <button className={Classes.btn}>Send</button>
      </div>
      </form>
  )
}

const PostAddReduxForm = reduxForm({
  form: 'postAdd'
})(PostAddForm)

const PostAdd = (props) => {

  // let addP = () => {
  //   props.addP()
  // }

  // let postAddOnChange = (e) => {
  //   let text = e.target.value
  //   props.postAddOnChange(text)
  // }

  const addNewPost = (formData) => {
    props.addP(formData.postAdd)
  }

  return (
    <div className={Classes.head}>
      <div className={Classes.headTitle}>
        My posts
        </div>
      <PostAddReduxForm onSubmit={addNewPost} />
    </div>
  )
}

export default PostAdd