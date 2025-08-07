import React from 'react'
import Label from '../(elements)/Label'
import Input from '../(elements)/Input'
const Forms = () => {
    return (
        <div className='login-forms'>
            <form>
                <Label htmlFor="name" content="Name" className="form-label" />
                <Label htmlFor="surname" content="Surname" className="form-label" />
                <Label htmlFor="password" content="Password" className="form-label" />
                <Label htmlFor="confirm-password" content="Confirm Password" className="form-label" />
                <Label htmlFor="email" content="Email" className="form-label" />
                <Label htmlFor="phone" content="Phone" className="form-label" />
                <Input type="text" id="country" name="country" placeholder="Country" />{/* Here will be an autocomplete*/ }
                <Input type="date" id="birthdate" name="birthdate" placeholder="Birthdate" />
            </form>
        </div>
    )
}

export default Forms