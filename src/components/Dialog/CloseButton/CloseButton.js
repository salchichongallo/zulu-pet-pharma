import React from 'react'
import {VisuallyHidden} from 'react-aria'
import {ReactComponent as CloseIcon} from './close.svg'

function CloseButton(props) {
  return (
    <button
      {...props}
      type="button"
      className="btn rounded-circle text-muted"
      style={{
        width: 40,
        height: 40,
        textAlign: 'center',
        padding: 0,
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
      }}
    >
      <CloseIcon aria-hidden focusable={false} />
      <VisuallyHidden>Close modal</VisuallyHidden>
    </button>
  )
}

export default CloseButton
