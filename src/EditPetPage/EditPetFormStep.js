import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import PetFields from 'pet/PetFields'
import {petSchema} from 'pet/petSchema'

const formSchema = Yup.object().shape(petSchema)

function EditPetFormStep({pet, onSubmit, isLoading}) {
  return (
    <>
      <h1 className="h4 mb-1">Editing Pet</h1>
      <p className="text-secondary">Update pet's basic info</p>
      <Formik
        onSubmit={onSubmit}
        initialValues={pet}
        validationSchema={formSchema}
      >
        <Form noValidate>
          <PetFields />
          <div className="mt-4">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary btn-lg btn-block"
            >
              {isLoading ? 'Loading...' : 'Save Changes'}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default EditPetFormStep
