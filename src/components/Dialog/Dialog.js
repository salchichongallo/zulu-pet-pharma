import React from 'react'
import {
  useOverlay,
  useModal,
  useDialog,
  FocusScope,
  usePreventScroll,
  OverlayContainer,
} from 'react-aria'

const DialogContext = React.createContext()

function Dialog(props) {
  usePreventScroll()
  const {children} = props
  const contentRef = React.useRef()
  const {dialogProps} = useDialog(props, contentRef)
  const {overlayProps} = useOverlay(props, contentRef)

  return (
    <DialogContext.Provider value={{dialogProps, contentRef}}>
      <OverlayContainer>
        <div
          {...overlayProps}
          style={{
            position: 'fixed',
            zIndex: 1040,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
          }}
        >
          <FocusScope contain restoreFocus autoFocus>
            {children}
          </FocusScope>
        </div>
      </OverlayContainer>
    </DialogContext.Provider>
  )
}

Dialog.Content = function DialogContent(props) {
  const {children, isFullscreen = false} = props
  const {modalProps} = useModal()
  const {dialogProps, contentRef} = React.useContext(DialogContext)
  return (
    <div
      {...dialogProps}
      {...modalProps}
      ref={contentRef}
      style={
        isFullscreen
          ? {height: '100%', outline: 0, padding: '2rem'}
          : {
              margin: '5vh auto',
              borderRadius: '1rem',
              outline: 0,
              maxWidth: 468,
              padding: '2rem',
            }
      }
      className={`bg-white position-relative ${
        isFullscreen ? '' : 'shadow-lg'
      }`}
    >
      {children}
    </div>
  )
}

export default Dialog
