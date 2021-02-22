import React from 'react'
import {petsUrlsByName} from './pets'

function AvatarPet({pet = 'dog', size = 56}) {
  return (
    <div
      className="d-inline-block rounded-circle flex-shrink-0"
      style={{
        width: size,
        height: size,
        padding: 8,
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.12)',
      }}
    >
      <img src={petsUrlsByName[pet]} style={{width: '100%'}} alt="" />
    </div>
  )
}

export default AvatarPet
