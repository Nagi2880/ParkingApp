import React from 'react'
import Button from '../(elements)/Button'
function page() {
  return (
    <div className={'Profile container'}>
      <ul>
        <Button href='' className='Maindata-button' >Profile</Button>
        <Button href='' className='Maindata-button'>Personal information</Button>
        <Button href='' className='Maindata-button'>Acoount secure</Button>
        <Button href='' className='Maindata-button'>Notifications{ /* bell icon */} </Button>
        <Button href='' className='Maindata-button'>Privacy {/* Cars/parkings/history travel*/} </Button>
        <Button href='' className='Maindata-button'>Language{/* Flag icon */} </Button>
      </ul>
    </div>
  )
}

export default page