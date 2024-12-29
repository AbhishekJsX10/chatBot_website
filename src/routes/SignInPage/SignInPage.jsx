import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='signInPage flex items-center h-screen justify-center'>
      <SignIn path='/sign-in' signUpUrl='/sign-up' />
    </div>
  )
}

export default SignInPage