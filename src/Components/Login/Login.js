import React from 'react'
import Classes from './Login.module.css'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          placeholder={'Login'}
          component={'input'}
          name={'login'} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          component={'input'}
          name={'password'} />
      </div>
      <div>
        <Field
          type={'checkbox'}
          component={'input'}
          name={'rememberMe'} /> remember me
        </div>
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
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login