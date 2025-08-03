import React from 'react'
import Button from '../(elements)/Button'

function Mainpage() {
    return (
        <main className="mainpage-container">
            <div className='mainpage-left-content'>    
                <h1> contact with people and take a parking where you are </h1>
                <Button href="/dowload" className="main-app-button">
                    <span>{/* here we are the dowload svg icon*/ }</span>dowload app
                </Button>
                <Button href="/contact" className="main-signup-button">
                    <span>{/* here we are the contact svg icon*/ }</span> Sign up
                </Button>
            </div>
            <div className='mainpage-right-content'>
                
            </div>
            
        </main>
    )
}

export default Mainpage