import React from 'react'
import '../../components/button/customButton.scss'


const CustomButton = ({ children, isGoogleSignIn, ...otherData }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherData}>
    {children}
  </button>
)

export default CustomButton