import React from 'react'
import Cards from '../(elements)/Cards'

function MainpageSectionOne() {
    return (
        <div className='mainpage-section-one'>
            <h2>What we offer?</h2>
            <ul>
                <li>
                    <Cards image="" alt='presentation-image'  />
                </li>
                <li>
                    <Cards image="" alt="presentation-image" />
                </li>
            </ul>
        </div>
    )
}

export default MainpageSectionOne