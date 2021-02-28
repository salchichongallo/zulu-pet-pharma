import React from 'react'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'

import OwnerFields from 'pet/OwnerFields'
import {ownerSchema} from 'pet/ownerSchema'
import PetPreviewCard from 'RegisterPetPage/PetPreviewCard'

const formSchema = Yup.object().shape({owner: Yup.object().shape(ownerSchema)})

function EditOwnerFormStep({
  pet,
  onSubmit,
  onEditPetClick,
  onCancel,
  isLoading,
}) {
  return (
    <>
      <h1 className="h4 mb-1">Editing Pet</h1>
      <p className="text-secondary">Update owner's info</p>
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
              {isLoading ? 'Loading...' : 'Save Changes'}
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

export default EditOwnerFormStep
