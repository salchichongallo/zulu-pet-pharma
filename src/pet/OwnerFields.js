import React from 'react'
import FormField from 'components/FormField'

function OwnerFields() {
  return (
    <>
      <div className="row">
        <div className="col pr-2">
          <FormField
            label="Owner's Name"
            name="owner.firstName"
            type="text"
            placeholder="John"
          />
        </div>
        <div className="col pl-2">
          <FormField
            label="Last Name"
            name="owner.lastName"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <FormField
        label="Phone"
        name="owner.phone"
        type="phone"
        placeholder="123 456 7890"
      />
      <FormField
        label="Address"
        name="owner.address"
        type="text"
        placeholder="Residency Address"
      />
      <FormField
        label="Email"
        name="owner.email"
        type="email"
        placeholder="john@doe.com"
      />
    </>
  )
}

export default OwnerFields
