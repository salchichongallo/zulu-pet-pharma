import {useState, useCallback} from 'react'
import {PetService} from 'pet/PetService'

export function useDeletePetPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const deletePet = useCallback(pet => {
    setIsLoading(true)
    return PetService.delete(pet)
      .then(result => {
        setIsLoading(false)
        return result
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [])
  return {deletePet, isLoading, error}
}
