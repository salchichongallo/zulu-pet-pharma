import React from 'react'
import Dialog, {CloseButton} from 'components/Dialog'
import AppLayout from 'components/AppLayout/AppLayout'
import AvatarPet from 'components/AvatarPet/AvatarPet'
import {useDeletePetPage} from './useDeletePetPage'

function DeletePetPage({pet, onDelete, onClose}) {
  const {deletePet, isLoading} = useDeletePetPage()
  const handleUnregister = React.useCallback(
    () => deletePet(pet).then(onDelete),
    [deletePet, onDelete, pet]
  )
  return (
    <Dialog isOpen isDismissable={!isLoading} onClose={onClose}>
      <AppLayout>
        <Dialog.Content>
          <CloseButton onClick={isLoading ? null : onClose} />
          <div className="text-center">
            <AvatarPet pet={pet.petType} size={72} />
            <h1 className="h3 mt-2">Unregister {pet.name}?</h1>
            <p className="text-center text-secondary">
              People will no longer see this pet
            </p>
          </div>
          <div className="mt-4">
            <button
              disabled={isLoading}
              onClick={handleUnregister}
              type="button"
              className="btn btn-primary btn-lg btn-block"
            >
              {isLoading ? 'Loading...' : 'Unregister'}
            </button>
            <button
              onClick={onClose}
              disabled={isLoading}
              type="button"
              className="btn btn-outline-primary btn-lg btn-block mt-3"
            >
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </AppLayout>
    </Dialog>
  )
}

export default DeletePetPage
