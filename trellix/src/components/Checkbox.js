import React from 'react'

const Checkbox = ({onChange}) => {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" onChange={onChange}></input>
        </div>
    )
}

export default Checkbox
