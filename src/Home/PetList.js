import React from 'react'
import PetCardItem from './PetCardItem'

function PetList({pets, onEditClick = () => {}}) {
  return (
    <div className="mt-5">
      <h2 className="h5">Pets</h2>
      {pets.map(pet => (
        <div key={pet.id} className="py-2">
          <PetCardItem {...pet} onEditClick={() => onEditClick(pet)} />
        </div>
      ))}
    </div>
  )
}

export default PetList
