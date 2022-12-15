import { Link } from "react-router-dom"

export const SignIn = () => {
  return (
    <div className='container-bg css-selector col-center'>
      <h1 className='title'>CHAT<span>APP</span></h1>
      <div className='sign-form col-direction shadow-lg'>
        <h2>Sign In</h2>

        <div className='form-group'>
          <small>With</small>
          <div className='social-button'>
            <span>SOCIAL LOGIN</span>
          </div>
          <small>or</small>
        </div>

        <div className='form-group'>
          <div className='form-input'>
            <input type="email" name="email" required autoComplete='none' placeholder="Email"/>
          </div>
          <div className='form-input'>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
        </div>

        <div className='form-group'>
          <p>Don't have an account yet? <Link to="/auth/sign-up">Create account</Link></p>
        </div>

        <Link to="/" className='form-group'>
          <div className='btn-submit'>
              ENTER
          </div>
        </Link>
      </div>
   </div>
  )
}
