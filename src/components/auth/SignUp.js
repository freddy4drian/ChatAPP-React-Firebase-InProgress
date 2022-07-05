import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className='container-bg css-selector col-center shadow-lg'>
      <h1 className='title'>CHAT<span>APP</span></h1>
      <div className='sign-form col-direction shadow-lg'>
        <h2>Sign Up</h2>

        <div className='form-group'>
          <small>With</small>
          <div className='social-button'>
            <span>SOCIAL SIGN UP</span>
          </div>
          <small>or</small>
        </div>

        <div className='form-group'>
          <div className='form-input'>
            <input type="text" name="name" required autoComplete='none' placeholder="Full Name"/>
          </div>
          <div className='form-input'>
            <input type="email" name="email" required autoComplete='none' placeholder="Email"/>
          </div>
          <div className='form-input'>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
        </div>

        <div className='form-group'>
          <p>Already have an account? <Link to="/auth/sign-in">Sign In</Link></p>
        </div>

        <div className='form-group'>
          <div className='btn-submit'>
              CREATE
          </div>
        </div>
      </div>
   </div>
  )
}
