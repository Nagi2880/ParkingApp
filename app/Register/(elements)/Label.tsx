import React from 'react'
import { LabelProps } from '@/app/(interfaces)/label'
import { JSX } from 'react'

const Label = (props : LabelProps) : JSX.Element => {
    return (
        <div className='label-component'>
            <label className={props.className} htmlFor={props.htmlFor}> {props.content}</label>
        </div>
    )
}

export default Label