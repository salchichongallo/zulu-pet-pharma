import React from 'react'
import {OverlayProvider} from 'react-aria'

import Home from 'Home/Home'
import {PetService} from 'pet/PetService'

function App() {
  const [pets, setPets] = React.useState([])
  const [, setError] = React.useState(null)
  React.useEffect(() => {
    PetService.loadAllPets().then(setPets).catch(setError)
  }, [])
  return (
    <OverlayProvider>
      <Home pets={pets} />
    </OverlayProvider>
  )
}

export default App
