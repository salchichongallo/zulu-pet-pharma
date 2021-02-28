import React from 'react'
import {formatPetAge} from 'pet/formatPetAge'
import AvatarPet from 'components/AvatarPet/AvatarPet'
import DeletePetButton from './DeletePetButton'

function PetCardItem({
  name,
  petType,
  breed,
  birthDate,
  owner,
  onEditClick,
  onDeleteClick,
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
          <div className="d-flex justify-content-between align-items-baseline">
            <div className="text-secondary">
              <span>Owned by </span>
              <span data-testid="PetCardItem-owner">{`${owner.firstName} ${owner.lastName}`}</span>
            </div>
            <div className="pr-2">
              <DeletePetButton onClick={onDeleteClick} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PetCardItem
