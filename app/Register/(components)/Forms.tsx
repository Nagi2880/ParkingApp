import React from 'react'
import Formfield from '../../(elements)/Formfield'
const Forms = () => {
    return (
        <div className='register-forms-container'>
            <form className='register-forms'>
                <Formfield type="text" id="name" name="name" placeholder="Name" htmlFor='name' content='Name' />
                <Formfield type="text" id="surname" name="surname" placeholder="Surname" htmlFor='surname' content='Surname' />
                <Formfield type="text" id="username" name="username" placeholder="Username" htmlFor='username' content='Username' />
                <Formfield type="password" id="password" name="password" placeholder="Password" htmlFor='password' content='Password' />
                <Formfield type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" htmlFor='confirm-password' content='Confirm Password' />
                <Formfield type="email" id="email" name="email" placeholder="Email" htmlFor='email' content='Email' />
                <Formfield type="tel" id="phone" name="phone" placeholder="Phone" htmlFor='phone' content='Phone' />
                <Formfield type="text" id="country" name="country" placeholder="Country" htmlFor='country' content='Country' />
                <Formfield type="date" id="birthdate" name="birthdate" placeholder="Birthdate" htmlFor='birthdate' content='Birthdate' />
                {/* Add any additional fields as necessary for a example "i'm not a bot checkbox" */  }
                <input type="submit" value="Register" className='register-submit'> Register </input>
            </form> 
        </div>
    )
}

export default Forms