import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sign.scss'

const SignIn = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  const handleSign = (e) => {
    e.preventDefault()
    if( email.length === 0 || password.length === 0 ){
  
      if(email.length === 0){
        setErrorEmail(true)
      }
      if(password.length === 0){
        setErrorPassword(true)
      }
    } 
  }


  return (
    <section className='section'>
      <div className='sign_content'>
        <div className='col-12 col-sm-6 col-md-6 col-xl-4'>
          <div className='card p-5 pb-4 text-center'>  
            <div>
              <h4 className='title_log'>Sign In</h4>
            </div>
            <form onSubmit={handleSign} className='form-group mt-3'>
              <div className='input_content'>
                <input 
                  type="email"  
                  onChange={e => setEmail(e.target.value)}
                  defaultValue={email}
                  placeholder='E-mail' 
                  className={ errorEmail ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                />
                {errorEmail && 
                  <div className='error_blank'>
                      <b>Input Error</b> <br />
                      Incorrect E-mail
                  </div>
                }
              </div>

              <div className='input_content'>
                <input 
                  type="password"  
                  onChange={e => setPassword(e.target.value)}
                  defaultValue={password}
                  placeholder='Password' 
                  className={ errorPassword ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                />
                
              </div>
              
              <div className='mt-3'>
                <button className='btn btn-primary p-3 w-100' type='submit'>
                  Sign in
                </button>
              </div>
            </form>

            <div className='mt-5'>
                <Link to='/reset' className='nav-link'>
                  <p>
                    Forgot Password?
                  </p>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn