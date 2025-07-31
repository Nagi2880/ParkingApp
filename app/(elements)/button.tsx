import React from 'react'
import { buttonProps } from '../(interfaces)/button'
const button = (props : buttonProps) : any  => {
return (
    <div>
        <button className={props.className} onClick={props.onClick} >

        </button>
    </div>
)
}

export default button