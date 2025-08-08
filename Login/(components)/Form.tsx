import React from 'react'
import Input from '../../app/(elements)/Formfield'
function Form() {
    return (
    <div className='Login-forms-container'>
        <form className='Login-forms'>
            <Input type="text" id="username" name="username" placeholder="Username" />
            
        </form>
    </div>
    )
}

export default Form