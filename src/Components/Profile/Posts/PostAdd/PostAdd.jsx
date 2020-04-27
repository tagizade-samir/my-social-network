import React from 'react';
import Classes from './PostAdd.module.css'
import { reduxForm, Field } from 'redux-form'
import {requiredField, maxLengthCreator} from '../../../../Utils/Validators/Validators'
import { Textarea } from '../../../Common/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10)

const PostAddForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} >
      <div className={Classes.headInputWrap}>
        <Field
          name={'postAdd'}
          component={Textarea}
          className={Classes.headInput}
          validate={[requiredField, maxLength10]} />
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