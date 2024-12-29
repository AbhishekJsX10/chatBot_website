import { SignUp } from '@clerk/clerk-react'
import React from 'react'
// import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className='signUpPage flex items-center h-screen justify-center'>
      <SignUp path='/sign-up' signInUrl='/sign-in'/>
    </div>
  )
}

export default SignUpPage