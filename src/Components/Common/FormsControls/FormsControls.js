import React from 'react'
import Classes from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched

  return (
    <div 
      className={
        Classes.form_control + ' ' + (hasError ? Classes.error : '')
      }>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.error && meta.touched

//   return (
//     <div 
//       className={
//         Classes.form_control + ' ' + (hasError ? Classes.error : '')
//       }>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
    )
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.error && meta.touched

//   return (
//     <div 
//       className={
//         Classes.form_control + ' ' + (hasError ? Classes.error : '')
//       }>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }