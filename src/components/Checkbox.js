import React from 'react'

const Checkbox = ({onChange, disabled, checked}) => {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked={checked} disabled={disabled} onChange={onChange}></input>
        </div>
    )
}

export default Checkbox
