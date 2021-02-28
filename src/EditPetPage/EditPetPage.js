import React from 'react'
import Dialog, {CloseButton} from 'components/Dialog'
import AppLayout from 'components/AppLayout/AppLayout'
import EditPetFormStep from './EditPetFormStep'
import {useEditPetPage} from './useEditPetPage'
import EditOwnerFormStep from './EditOwnerFormStep'

function EditPetPage({pet: initialPet, onEdit, onClose}) {
  const [step, setStep] = React.useState(0)
  const [pet, setPet] = React.useState({...initialPet})
  const {updatePet, isLoading} = useEditPetPage()
  const handleSubmit = React.useCallback(
    editedPet => {
      const payload = {...pet, ...editedPet}
      setPet(payload)
      updatePet(payload).then(onEdit)
    },
    [pet, onEdit, updatePet]
  )
  return (
    <Dialog isOpen isDismissable={!isLoading} onClose={onClose}>
      <AppLayout>
        <Dialog.Content>
          <CloseButton onClick={isLoading ? null : onClose} />
          {step === 0 && (
            <EditPetFormStep
              pet={pet}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              onUpdateOwnerClick={() => setStep(1)}
            />
          )}
          {step === 1 && (
            <EditOwnerFormStep
              pet={pet}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              onEditPetClick={() => setStep(0)}
              onCancel={onClose}
            />
          )}
        </Dialog.Content>
      </AppLayout>
    </Dialog>
  )
}

export default EditPetPage
