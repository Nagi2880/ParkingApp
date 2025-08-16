import React from 'react'
import Form from './(components)/Form'
import Logo from '@/app/(elements)/Logo'
import styles from './(components)/LoginComponents.module.css'
function page() {
    return (
        <div className={styles.LoginPageContainer}>
            <header className={styles.LoginHeader}>
                <Logo />
            </header>
            <Form />
        </div>
    )
}

export default page