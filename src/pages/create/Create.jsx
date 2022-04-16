import React, { useState } from 'react'
import './Create.scss'

const Create = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [repeatPassoword , setRepeatPassoword] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false)

  const handleCreate = (e) => {
    e.preventDefault()
    if(name.length === 0 || email.length === 0 || password.length === 0 || repeatPassoword.length === 0){
      if(name.length === 0){
        setErrorName(true)
      }
      if(email.length === 0){
        setErrorEmail(true)
      }
      if(password.length === 0){
        setErrorPassword(true)
      }
      if(repeatPassoword.length === 0){
        setErrorRepeatPassword(true)
      }
    } 
  }

  return (
    <section className='section'>
      <div className='create_content'>
        <div className='col-12 col-sm-6 col-md-6 col-xl-4'>
            <div className='card p-5 pb-4 text-center'>  
              <div>
                <h4 className='title_log'>Create a free <br /> account</h4>
                <p className='mt-2'>Save assets into your own <br /> collections</p>
              </div>
              <form onSubmit={handleCreate} className='form-group mt-3'>
                <div className='input_content'>
                  <input 
                    type="text"  
                    onChange={e => setName(e.target.value)}
                    defaultValue={name}
                    placeholder='Name Surname' 
                    className={ errorName ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                  />
                  {errorName && 
                    <div className='error_blank'>
                        <b>Input Error</b> <br />
                        Incorrect name
                    </div>
                  }

                </div>
                <div>
                  <input 
                    type="email"  
                    onChange={e => setEmail(e.target.value)}
                    placeholder='E-mail' 
                    defaultValue={email}
                    className={ errorEmail ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                  />
                </div>
                <div>
                  <input 
                    type="password"  
                    onChange={e => setPassword(e.target.value)}
                    defaultValue={password}
                    placeholder='Password' 
                    className={ errorPassword ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                  />
                </div>
                <div>
                  <input 
                    type="password"  
                    onChange={e => setRepeatPassoword(e.target.value)}
                    defaultValue={repeatPassoword}
                    placeholder='Repeat Password' 
                    className={ errorRepeatPassword ? 'border-danger form-control mb-4' : 'form-control mb-4'}
                  />
                </div>
                <div className='mt-3'>
                  <button className='btn btn-primary p-3 w-100' type='submit'>
                    Create
                  </button>
                </div>
              </form>
              
              <div className='mt-4 '>
                <p className='bottom_text'>By clicking the "Create" button, you consent to the collection and processing of your personal data.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Create


