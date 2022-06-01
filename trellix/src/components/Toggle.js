import React from 'react'

const Toggle = ({onChange, disabled, checked}) => {
  return (
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onChange} disabled={disabled} checked={checked}></input>
    </div>
  )
}

export default Toggle
