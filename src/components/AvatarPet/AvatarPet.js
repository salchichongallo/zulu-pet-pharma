import React from 'react'
import {getImgUrl} from './pets'

function AvatarPet({pet = 'dog', size = 56, active = false}) {
  return (
    <div
      className="d-inline-block rounded-circle flex-shrink-0"
      style={{
        width: size,
        height: size,
        padding: 8,
        background: '#fff',
        boxShadow: active
          ? '0 0 0 3px var(--primary)'
          : '0 0 0 1px rgba(0, 0, 0, 0.12)',
      }}
      data-testid="AvatarPet"
    >
      <img src={getImgUrl(pet)} style={{width: '100%'}} alt={pet} />
    </div>
  )
}

export default AvatarPet
