import React, { useEffect, useState } from 'react'
import Player from './Player/Player'
import Preview from './Player/preview/Preview'
import './Exam.scss'
import ButtonTest from './ButtonTest'
import { useCookies } from 'react-cookie';

const Exam = () => {

  const [preview , setPreview] = useState(true)
  const [start , setStart] = useState(true)
  const [cookie , setCookie] = useCookies(['Preview'])
  
  console.log(cookie)

  useEffect(() => {
    if(cookie.Preview === null){  
      setCookie('Preview' , 'true')
    }
    if(cookie.Preview === 'true'){
      setPreview(false)
    }
  }, [cookie])


  const handleStartTest = () => {
    setStart(false)
    setCookie('Preview', 'true')
  }


  return (
    <section className='section'>
      <Preview preview={preview}   />

      <div className='col-12 col-sm-12 col-md-12 col-xl-12'>
        <div className='card p-5'>
          <h4 className='text-center'>Question 1</h4>
          <p className='text-center mt-3 mb-4'>1/10</p>

          {/* Player */}

          <Player />

          <div className='d-flex justify-content-center'>
            <div className='col-xl-4 mt-5 mb-5'>
              {start ? <ButtonTest startTest={handleStartTest}  btnText={'Start the test'}/> : <ButtonTest   btnText={'Stop and Next'}/> }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exam