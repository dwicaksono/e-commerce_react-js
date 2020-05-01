import React from 'react'
import '../Signin/signin.scss'
import FormInput from '../FormInput/FormInput.js'
import CustomButton from '../button/CustomButton.js'
import { auth, signInWithGoogle } from '../Firebase/FirebaseUtil.js'


class Signin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
          <div className='buttons'>
            <CustomButton type='submit'> SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
          Google Sign In {' '}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}























// const Signin = () => {
//   const [dataSignin, setDateSignin] = useState({
//     email: '',
//     password: ''
//   })

//   const handleSubmit = event => {
//     event.preventDefault()
//     setDateSignin({ email: '', password: '' })

//   }
//   const handleChange = event => {
//     const { value, name } = event.target
//     setDateSignin({ [name]: value })
//   }

//   return (
//     <div className='signin'>
//       <h2>I already have an account</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={(event) => { handleSubmit(event) }}>
//         <FormInput name='email' type='email' value={dataSignin.email} handleChange={(event) => handleChange(event)} label='email' required />

//         <FormInput name='password' type='password' value={dataSignin.password} handleChange={(event) => handleChange(event)} label='password' required />

//         <CustomButton type='submit'> SIGN IN</CustomButton>
//         {/* <CustomButton onCLick={SigninWithGoogle}> Google Sign In</CustomButton> */}
//       </form>

//     </div>
//   )
// }

export default Signin