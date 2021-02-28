import React from 'react'
import {formatPetAge} from 'pet/formatPetAge'
import AvatarPet from 'components/AvatarPet/AvatarPet'

function PetPreviewCard({name, petType, breed, birthDate, onEditClick}) {
  return (
    <div
      className="d-flex my-3"
      style={{
        borderRadius: 12,
        padding: '0.5rem 1rem',
        background: 'rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="mr-3">
        <AvatarPet pet={petType} />
      </div>
      <div className="w-100">
        <header className="d-flex justify-content-between align-items-baseline">
          <div>
            <h1 className="h5 d-inline-block mb-0">{name}</h1>
            <span className="text-muted"> • </span>
            <span>{breed}</span>
          </div>
          <button
            type="button"
            onClick={onEditClick}
            className="btn btn-link text-uppercase font-weight-bold"
          >
            Edit
          </button>
        </header>
        <div className="mt-n1">
          <p className="mb-2" data-testid="PetCardItem-age">
            {formatPetAge(birthDate)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PetPreviewCard
