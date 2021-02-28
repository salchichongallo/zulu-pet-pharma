import React from 'react'
import Dialog, {CloseButton} from 'components/Dialog'
import AppLayout from 'components/AppLayout/AppLayout'
import EditPetFormStep from './EditPetFormStep'
import {useEditPetPage} from './useEditPetPage'

function EditPetPage({pet: initialPet, onEdit, onClose}) {
  const [pet, setPet] = React.useState({...initialPet})
  const {updatePet, isLoading} = useEditPetPage()
  const handleSubmit = editedPet => {
    const payload = {...pet, ...editedPet}
    setPet(payload)
    updatePet(payload).then(onEdit)
  }
  return (
    <Dialog isOpen isDismissable={!isLoading} onClose={onClose}>
      <AppLayout>
        <Dialog.Content>
          <CloseButton onClick={isLoading ? null : onClose} />
          <EditPetFormStep
            pet={pet}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Dialog.Content>
      </AppLayout>
    </Dialog>
  )
}

export default EditPetPage
