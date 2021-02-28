import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import PetFields from 'pet/PetFields'
import {petSchema} from 'pet/petSchema'

const formSchema = Yup.object().shape(petSchema)

function PetFormStep({pet, onSubmit}) {
  return (
    <>
      <h1 className="h4 mb-1">Register Pet</h1>
      <p className="text-secondary">It will only take a few seconds</p>
      <Formik
        onSubmit={onSubmit}
        initialValues={pet}
        validationSchema={formSchema}
      >
        <Form noValidate>
          <PetFields />
          <div className="mt-4">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default PetFormStep
