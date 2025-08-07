import React, { JSX } from 'react'
import Inputprops from '../../(interfaces)/input'

const Input = (props :Inputprops) : JSX.Element => {
    return (
        <input className={props.className} typeof={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
    )
}

export default Input