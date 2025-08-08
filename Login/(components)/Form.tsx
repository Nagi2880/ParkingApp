import React from 'react'
import Formfield from '../../app/(elements)/Formfield'
function Form() {
    return (
    <div className='Login-forms-container'>
        <form className='Login-forms'>
            <Formfield type="text" id="identifier" name="identifier" placeholder="phone or email" htmlFor='indentifier' content='Phone or email' />
            <Formfield type="password" id="password" name="password" placeholder="Password" htmlFor='password' content='Password' />
            <input type="submit" value="Login" className='Login-submit'> Login </input>
            { /* Here will be a link where you can recove your password and another option to log in for example google, apple etc*/}
        </form>
    </div>
    )
}

export default Form