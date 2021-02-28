import React from 'react'
import {OverlayProvider} from 'react-aria'
import {useOverlayTriggerState} from 'react-stately'

import Home from 'Home/Home'
import {PetService} from 'pet/PetService'
import EditPetPage from 'EditPetPage/EditPetPage'
import RegisterPetPage from 'RegisterPetPage/RegisterPetPage'

function App() {
  const [pets, setPets] = React.useState([])
  const [, setError] = React.useState(null)
  React.useEffect(() => {
    PetService.loadAllPets().then(setPets).catch(setError)
  }, [])
  const registerPage = useOverlayTriggerState({defaultOpen: false})
  const addPet = React.useCallback(
    pet => {
      setPets(pets => [pet, ...pets])
      registerPage.close()
    },
    [registerPage]
  )

  const [editingPet, setEditingPet] = React.useState(null)
  const handleEdit = editedPet => {
    setPets(pets =>
      pets.map(pet => (pet.id === editedPet.id ? editedPet : pet))
    )
    setEditingPet(null)
  }

  return (
    <OverlayProvider>
      <Home
        pets={pets}
        onRegisterClick={registerPage.open}
        onEditClick={setEditingPet}
      />
      {registerPage.isOpen && (
        <RegisterPetPage onPet={addPet} onBackClick={registerPage.close} />
      )}
      {editingPet && (
        <EditPetPage
          pet={editingPet}
          onEdit={handleEdit}
          onClose={() => setEditingPet(null)}
        />
      )}
    </OverlayProvider>
  )
}

export default App
