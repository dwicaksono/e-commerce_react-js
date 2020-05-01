import React from 'react'
import '../Signin-and-Signup/signin-and-Signup.scss'

import Signin from '../../components/Signin/Signin.js'
import Signup from '../../components/Signup/Signup.js'

const SigninAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <Signup />
    </div>
  )
}

export default SigninAndSignUp