import React from 'react'
import FormField from 'components/FormField'
import PetAvatarRadioGroup from './PetAvatarRadioGroup'

function PetFields() {
  return (
    <>
      <PetAvatarRadioGroup name="petType" />
      <FormField
        label="Pet's Name"
        name="name"
        type="text"
        placeholder="Izzy"
      />
      <FormField label="Breed" name="breed" type="text" placeholder="Terrier" />
      <FormField label="Birth Date" name="birthDate" type="date" />
    </>
  )
}

export default PetFields
