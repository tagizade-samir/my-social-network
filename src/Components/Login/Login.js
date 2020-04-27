import React from 'react'
import Classes from './Login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls'
import { requiredField } from '../../Utils/Validators/Validators'
import {connect} from 'react-redux'
import {loginUser, logoutUser} from '../../Redux/authReducer'
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          placeholder={'Login'}
          component={Input}
          name={'login'}
          validate={[requiredField]} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          component={Input}
          name={'password'}
          validate={[requiredField]} />
      </div>
      <div>
        <Field
          type={'checkbox'}
          component={Input}
          name={'rememberMe'} /> remember me
        </div>
        {props.error && <div className={Classes.form_summ_error}>
          {props.error}
        </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData.login, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  loginUser,
  logoutUser
})(Login)