import React from 'react'

const Toggle = ({onChange}) => {
  return (
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onChange}></input>
    </div>
  )
}

export default Toggle
