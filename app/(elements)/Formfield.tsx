import React, { JSX } from 'react'
import Formfields from '../(interfaces)/formfield'

const Formfield = (props :Formfields) : JSX.Element => {
    return (
        <div className={props.classNameContainer}>
            {props.labelcontent &&
            <label className={props.className} htmlFor={props.htmlFor} content={props.labelcontent} id={props.id}  />                
            }
            
            <input className={props.className} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

export default Formfield