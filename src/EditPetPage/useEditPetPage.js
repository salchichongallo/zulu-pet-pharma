import {useState, useCallback} from 'react'
import {PetService} from 'pet/PetService'

export function useEditPetPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const updatePet = useCallback(pet => {
    setIsLoading(true)
    return PetService.update(pet)
      .then(result => {
        setIsLoading(false)
        return result
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [])
  return {updatePet, isLoading, error}
}
