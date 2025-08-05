import React from 'react'

const Forms = () => {
    return (
        <div className='login-forms'>
            <form>
                <label htmlFor="name">Name</label>
                <label htmlFor="lastname">Lastname</label>
                <label htmlFor="password">Password</label>
                <label htmlFor="confirm-password">Confirm Password</label>
                <label htmlFor="email">Email</label>
                <label htmlFor="phone">Phone</label>
                <input type="text"id="country" name="country" placeholder= "Country" /> {/* Here will be an autocomplete*/ }
                <input type='date' id="birthdate" name="birthdate" placeholder='Birthdate' />
            </form>
        </div>
    )
}

export default Forms