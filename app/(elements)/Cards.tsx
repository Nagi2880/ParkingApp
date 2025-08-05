import React, { JSX } from 'react'
import { cards } from '../(interfaces)/cards'
import Image from 'next/image'

const Cards = (props : cards) : JSX.Element => {
    return (
        <div>
            <header>
                <Image 
                src={props.image}
                alt={props.alt} 
                className={props.className} 
                width={props.width} 
                height={props.height}
                />    
            </header>
            <main>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </main>
        </div>
    )
}

export default Cards