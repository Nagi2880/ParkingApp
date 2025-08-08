import React from 'react'
import Form from './(components)/Form'
import Logo from '@/app/(elements)/Logo'
function page() {
    return (
        <div className='Login-page-container'>
            <header className='Login-header-without-navbar'>
                <Logo />
            </header>
            <Form />
        </div>
    )
}

export default page