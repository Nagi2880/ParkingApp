import React from 'react'
import { buttonProps } from '../(interfaces)/button'
import { JSX } from 'react'
import Link from 'next/link'

const Button = (props : buttonProps) : JSX.Element  => {
return (
    <div>
        <Link href={props.href ? props.href : '#'} passHref>
            <button className={props.className} onClick={props.onClick} >
            {props.children}
            </button>
        </Link>
    </div>
)
}

export default Button