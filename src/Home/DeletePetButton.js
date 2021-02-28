import React from 'react'
import {VisuallyHidden} from 'react-aria'
import {ReactComponent as DeleteIcon} from './deleteOutline.svg'

function DeletePetButton(props) {
  return (
    <button
      {...props}
      type="button"
      className="btn rounded-circle text-danger"
      style={{
        width: 40,
        height: 40,
        textAlign: 'center',
        padding: 0,
      }}
    >
      <DeleteIcon aria-hidden focusable={false} />
      <VisuallyHidden>Delete Pet</VisuallyHidden>
    </button>
  )
}

export default DeletePetButton
