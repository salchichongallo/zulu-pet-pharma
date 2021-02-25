import React from 'react'
import {formatPetAge} from 'pet/formatPetAge'
import AvatarPet from 'components/AvatarPet/AvatarPet'

function PetCardItem({
  name,
  petType,
  breed,
  birthDate,
  ownerName,
  ownerLastName,
  onDetailsClick,
}) {
  return (
    <article className="card" data-testid="PetCardItem">
      <div className="card-body pb-3 d-flex">
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
              onClick={onDetailsClick}
              className="btn btn-link text-uppercase font-weight-bold"
            >
              Details
            </button>
          </header>
          <div className="mt-n1">
            <p className="mb-2" data-testid="PetCardItem-age">
              {formatPetAge(birthDate)}
            </p>
          </div>
          <div className="text-secondary">
            <span>Owned by </span>
            <span data-testid="PetCardItem-owner">{`${ownerName} ${ownerLastName}`}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PetCardItem
