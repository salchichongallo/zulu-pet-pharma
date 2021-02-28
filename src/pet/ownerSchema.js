import * as Yup from 'yup'

export const ownerSchema = {
  firstName: Yup.string().required('Please fill this field'),
  lastName: Yup.string().required('Please fill this field'),
  phone: Yup.string().required('Please fill this field'),
  address: Yup.string().required('Please fill this field'),
  email: Yup.string()
    .email('Provide a valid email')
    .required('Please fill this field'),
}
