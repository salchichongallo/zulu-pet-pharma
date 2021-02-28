import React from 'react'
import Dialog, {CloseButton} from 'components/Dialog'
import AppLayout from 'components/AppLayout/AppLayout'

import PetFormStep from './PetFormStep'
import OwnerFormStep from './OwnerFormStep'
import {useRegisterPet} from './useRegisterPage'

const initialValues = {
  name: '',
  petType: '',
  breed: '',
  birthDate: '',
  owner: {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
  },
}

function RegisterPetPage({onBackClick, onPet}) {
  const [step, setStep] = React.useState(0)
  const [pet, setPet] = React.useState(initialValues)
  const {registerPet, isLoading} = useRegisterPet()
  const handlePetInfoSubmit = petInfo => {
    setPet(p => ({...p, ...petInfo}))
    setStep(1)
  }
  const handleSubmit = React.useCallback(
    owner => {
      const payload = {...pet, ...owner}
      setPet(payload)
      registerPet(payload).then(onPet)
    },
    [pet, registerPet, onPet]
  )
  return (
    <Dialog isOpen isDismissable={!isLoading} onClose={onBackClick}>
      <AppLayout>
        <Dialog.Content>
          <CloseButton onClick={isLoading ? null : onBackClick} />
          {step === 0 && (
            <PetFormStep pet={pet} onSubmit={handlePetInfoSubmit} />
          )}
          {step === 1 && (
            <OwnerFormStep
              pet={pet}
              onSubmit={handleSubmit}
              onEditPetClick={isLoading ? () => {} : () => setStep(0)}
              onCancel={onBackClick}
              isLoading={isLoading}
            />
          )}
        </Dialog.Content>
      </AppLayout>
    </Dialog>
  )
}

export default RegisterPetPage
