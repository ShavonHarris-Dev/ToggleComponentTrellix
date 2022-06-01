import React from 'react'

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
                        <td>Disabled Checkbox</td>
                        <td>Disabled Toggle</td>
                    </tr>
                    <tr>
                        <td>Enabled</td>
                        <td>Enabled Checkbox</td>
                        <td>Enabled Toggle</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Container
