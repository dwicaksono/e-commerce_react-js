import React from 'react'
import '../Signup/signup.scss'
import FormInput from '../FormInput/FormInput.js'
import CustomButton from '../button/CustomButton.js'
import { auth, createUserProfileDocument } from '../Firebase/FirebaseUtil'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('password not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(`this error message`, error)
    }


  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      < div className='sign-up' >
        <div className='title'> I do not have a account</div>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' label='Name' value={displayName} onChange={this.handleChange} required />
          <FormInput type='email' name='email' label='Email' value={email} onChange={this.handleChange} required />
          <FormInput type='password' name='password' label='Password' value={password} onChange={this.handleChange} required />
          <FormInput type='password' name='confirmPassword' label='Confirm password' value={confirmPassword} onChange={this.handleChange} required />
          <CustomButton type='submit' > SIGN UP </CustomButton>
        </form>
      </div >
    )
  }

}

export default Signup