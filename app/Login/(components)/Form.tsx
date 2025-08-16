import React from 'react'
import Formfield from '../../(elements)/Formfield'
import  styles from './LoginComponents.module.css'


function Form() {
    return (
    <div className={styles.LoginFormsContainer}>

        <form className={styles.LoginForm}>
            <Formfield type="text" className={styles.placeholders} id="identifier" name="identifier" placeholder="phone or email" htmlFor='indentifier' labelcontent='Phone or email' />
            <Formfield type="password"className={styles.placeholders} id="password" name="password" placeholder="Password" htmlFor='password' labelcontent='Password' />
            <input type="submit" value="Login" className='Login-submit' placeholder='Login' /> 
            { /* Here will be a link where you can recove your password and another option to log in for example google, apple etc*/}
        </form>
    </div>
    )
}

export default Form