import React from 'react'
import {OverlayProvider} from 'react-aria'
import {useOverlayTriggerState} from 'react-stately'

import Home from 'Home/Home'
import {PetService} from 'pet/PetService'
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
  return (
    <OverlayProvider>
      <Home pets={pets} onRegisterClick={registerPage.open} />
      {registerPage.isOpen && (
        <RegisterPetPage onPet={addPet} onBackClick={registerPage.close} />
      )}
    </OverlayProvider>
  )
}

export default App
