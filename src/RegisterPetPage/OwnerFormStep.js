import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'

import {ownerSchema} from 'pet/ownerSchema'
import OwnerFields from 'pet/OwnerFields'
import PetPreviewCard from './PetPreviewCard'

const formSchema = Yup.object().shape({owner: Yup.object().shape(ownerSchema)})

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function OwnerFormStep({pet, onSubmit, onEditPetClick, onCancel, isLoading}) {
  return (
    <>
      <h1 className="h4 mb-1">Almost Done</h1>
      <p className="text-secondary">
        Who owns <em>{capitalize(pet.name)}</em> ?
      </p>
      <PetPreviewCard {...pet} onEditClick={onEditPetClick} />
      <Formik
        onSubmit={onSubmit}
        initialValues={pet}
        validationSchema={formSchema}
      >
        <Form noValidate>
          <OwnerFields />
          <div className="mt-4">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary btn-lg btn-block"
            >
              {isLoading ? 'Loading...' : 'Finish'}
            </button>
            <button
              onClick={onCancel}
              disabled={isLoading}
              type="button"
              className="btn btn-outline-primary btn-lg btn-block mt-3"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default OwnerFormStep
