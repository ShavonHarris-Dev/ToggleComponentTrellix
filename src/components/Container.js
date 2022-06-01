import React, {useState} from 'react'
import Checkbox from './Checkbox.js'
import Toggle from './Toggle'

const Container = () => {
    const [checked, setChecked] = useState(true)
    const [checkedSwitch, setCheckedSwitch] = useState(true)

    const setToggleCheck=()=> {
        setChecked(!checked);
    }
    const setToggleSwitch=()=> {
        setCheckedSwitch(!checkedSwitch)
    }

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
                        <td>{<Checkbox  onChange={(event) => setToggleCheck(event.target.checked)}
                        disabled={true}
                        />
                        }

                        
                        </td>
                        <td>{<Toggle onChange={(event)=>setToggleSwitch(event.target.checked)} 
                        disabled={true}
                        checked={false}
                        
                        />
                        }
                        </td>
                    </tr>
                    <tr>
                        <td>Enabled</td>
                        <td>{<Checkbox  onChange={(event) => setToggleCheck(event.target.checked)}
                        checked={checked}
                        />}</td>
                        <td>{<Toggle onChange={setToggleSwitch}
                        disabled={false}
                        checked={checkedSwitch}
                        />
                        }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Container
