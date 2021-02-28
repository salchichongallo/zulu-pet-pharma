import React from 'react'
import {useField} from 'formik'
import {useRadioGroupState} from 'react-stately'
import {useRadio, useRadioGroup, VisuallyHidden} from 'react-aria'

import AvatarPet from 'components/AvatarPet/AvatarPet'
import {getPetsNames} from 'components/AvatarPet/pets'

const RadioContext = React.createContext()

function RadioGroup(props) {
  const state = useRadioGroupState(props)
  const {radioGroupProps} = useRadioGroup(props, state)
  return (
    <RadioContext.Provider value={state}>
      <div {...props} {...radioGroupProps} />
    </RadioContext.Provider>
  )
}

function PetRadio(props) {
  const {children} = props
  const state = React.useContext(RadioContext)
  const ref = React.useRef(null)
  const {inputProps} = useRadio(props, state, ref)

  const isSelected = state.selectedValue === props.value

  return (
    <label style={{display: 'inline-block'}}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      <div style={{paddingLeft: 6}}>
        {React.cloneElement(children, {active: isSelected})}
      </div>
    </label>
  )
}

function PetAvatarRadioGroup(props) {
  const [field, meta, form] = useField(props)
  const allPets = getPetsNames()
  return (
    <div className="form-group">
      <div
        style={{
          top: 0,
          left: 0,
          overflowX: 'auto',
          position: 'sticky',
        }}
      >
        <RadioGroup
          {...field}
          id={props.name}
          onChange={pet => form.setValue(pet)}
          aria-label="Available Pets"
          style={{display: 'flex', padding: '0.25rem 0'}}
        >
          {allPets.map(petName => (
            <PetRadio key={petName} value={petName}>
              <AvatarPet pet={petName} />
            </PetRadio>
          ))}
        </RadioGroup>
      </div>
      <div className={meta.error ? 'is-invalid' : 'is-valid'} />
      {meta.touched && meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </div>
  )
}

export default PetAvatarRadioGroup
