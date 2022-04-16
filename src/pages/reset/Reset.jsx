import React, { useState } from 'react'
import './Reset.scss'
import { Link } from 'react-router-dom';

const Reset = () => {
  const [email , setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [finish, setFinish] = useState(false)

  const handleReset = (e) => {
    e.preventDefault()
    if( email.length === 0){
      if(email.length === 0){
        setErrorEmail(true)
      }
    } else{
      setFinish(true)
    }
  }
  return (
    <section className='section'>
         <div className='reset_content'>
          {
            finish ? (
              <div className='col-12 col-sm-6 col-md-6 col-xl-4'>
                <div className='card p-5 pb-4 text-center'>  
                  <div>
                    <h4 className='title_log'>Done!</h4>
                    <p>
                      If the information entered is associated with an Habsida account we have sent you an email with password reset instructions.
                    </p>
                  </div>
                  <div className='mt-3'>
                    <Link to="/" className='btn btn-primary p-3 w-100'>
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className='col-12 col-sm-6 col-md-6 col-xl-4'>
                <div className='card p-5 pb-4 text-center'>  
                  <div>
                    <h4 className='title_log'>Forgot password?</h4>
                    <p>Enter your details below to request an account password reset.</p>
                  </div>
                  <form onSubmit={handleReset} className='form-group mt-3'>
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
                    <div className='mt-3'>
                      <button className='btn btn-primary p-3 w-100' type='submit'>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
        </div>
    </section>
  )
}

export default Reset