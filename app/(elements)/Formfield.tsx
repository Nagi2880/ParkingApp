import React, { JSX } from 'react'
import Formfields from '../(interfaces)/formfield'

const Formfield = (props :Formfields) : JSX.Element => {
    return (
        <div className={props.classNameContainer}>
            <label className={props.className} htmlFor={props.htmlFor} content={props.content} id={props.id}  />
            <input className={props.className} typeof={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

export default Formfield