import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import PetFields from 'pet/PetFields'
import {petSchema} from 'pet/petSchema'
import {ReactComponent as PenIcon} from './pen.svg'

const formSchema = Yup.object().shape(petSchema)

function EditPetFormStep({pet, onSubmit, onUpdateOwnerClick, isLoading}) {
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
          <button
            disabled={isLoading}
            onClick={onUpdateOwnerClick}
            type="button"
            className="btn btn-link"
          >
            <PenIcon aria-hidden focusable={false} /> Update owner's info
          </button>
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
