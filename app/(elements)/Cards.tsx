import React from 'react'
import { cards } from '../(interfaces)/cards'
import Image from 'next/image'

const Cards = (props : cards) => {
    return (
        <div>
            <Image 
            src={props.image}
            alt={props.alt} 
            className={props.className} 
            width={props.width} 
            height={props.height}
            />    
        </div>
    )
}

export default Cards