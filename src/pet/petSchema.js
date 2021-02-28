import * as Yup from 'yup'

export const petSchema = {
  name: Yup.string().required('Please fill this field'),
  breed: Yup.string().required('Please fill this field'),
  birthDate: Yup.date().required('Please fill this field'),
  petType: Yup.string().required('Please select a pet type'),
}
