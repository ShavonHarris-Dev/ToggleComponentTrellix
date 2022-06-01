import React from 'react'

const Checkbox = ({onChange, disabled}) => {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" disabled={disabled}onChange={onChange}></input>
        </div>
    )
}

export default Checkbox
