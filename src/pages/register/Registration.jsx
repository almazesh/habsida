import React, { useState }  from 'react'
import './Registration.scss'
import registerCardImage from '../../assets/register/card-img.png'
import Modal from './modal/Modal';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [email , setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [modal , setModal] = useState('')

  const handleReset = (e) => {
    e.preventDefault()
    if( email.length === 0){
      if(email.length === 0){
        setErrorEmail(true)
      }
    }else{
      setModal('#exampleModal')
    }
  }

  
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-6 col-xl-7 '>
          <div className='card'>
            <div className='card-image'>
              <img src={registerCardImage} className="w-100"/>
            </div>
            <div className='card-body'>
              <Link to='' className='nav-link ps-0 top_link'>
                <h5>
                  Top Software Testing Interview Questions
                </h5>
              </Link>
              <p>
                Test your job interview skills using 500+ real questions <br /> from Korean companies and get AI recommendations
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-xl-4'>
          <div className='card p-5 pb-4 text-center'>  
            <div>
              <h4 className='title_log'>Start the test <br /> without registration</h4>
              <p className='mt-2'>We will send you the link to <br /> your email address</p>
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
              <button className='btn btn-primary mt-4 p-3 w-100' type='submit'  data-bs-toggle="modal" data-bs-target={modal}>Send</button>
            </form>

            <div className='divide_block'>
              <p className='divide_text'>or</p>
            </div>

            <div className='mt-4'>
              <Link to='/create' className='btn btn-outline-primary p-3 w-100'>
                Create Account
              </Link>
            </div>

            <div className='mt-5'>
              <Link to='/sign' className='nav-link'>
                <p>
                  Sign in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </section>
  )
}

export default Registration