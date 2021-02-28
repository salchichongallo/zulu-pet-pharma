import {useState, useCallback} from 'react'
import {PetService} from 'pet/PetService'

export function useRegisterPet() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const registerPet = useCallback(pet => {
    setIsLoading(true)
    return PetService.register(pet)
      .then(result => {
        setIsLoading(false)
        return result
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [])
  return {registerPet, isLoading, error}
}
