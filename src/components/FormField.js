import React from 'react'
import {useField} from 'formik'

function FormField({name, label, ...restProps}) {
  const [field, meta] = useField({name, ...restProps})
  let className = 'form-control form-control-lg'
  if (meta.touched) {
    className += ` ${meta.error ? 'is-invalid' : 'is-valid'}`
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...field} {...restProps} className={className} />
      {meta.touched && meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </div>
  )
}

export default FormField
