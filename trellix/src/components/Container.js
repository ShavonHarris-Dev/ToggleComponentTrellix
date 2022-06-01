import React, {useState} from 'react'
import Checkbox from './Checkbox.js'
import Toggle from './Toggle'

const Container = () => {
    return (
        <div class="container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>Checkbox</th>
                        <th>Toggle Switch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Disabled</td>
                        <td>{<Checkbox />}</td>
                        <td>{<Toggle />}</td>
                    </tr>
                    <tr>
                        <td>Enabled</td>
                        <td><Checkbox /></td>
                        <td>{<Toggle />}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Container
