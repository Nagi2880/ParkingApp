import React from 'react'
import Formfield from '../../app/(elements)/Formfield'
function Form() {
    return (
    <div className='Login-forms-container'>
        <form className='Login-forms'>
            <Formfield type="text" id="username" name="username" placeholder="Username" htmlFor='username' content='Username' />
            <Formfield type="password" id="password" name="password" placeholder="Password" htmlFor='password' content='Password' />
        </form>
    </div>
    )
}

export default Form