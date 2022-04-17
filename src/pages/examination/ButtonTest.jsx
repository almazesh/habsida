import React from 'react'
import './ButtonTest.scss'

const ButtonTest = ({ startTest,btnText}) => {
  return (
    <>
      {
        btnText === 'Start the test' ? (
          <button onClick={startTest} className='btn btn-primary w-100 p-3 btn_start'>{btnText}</button>
        ) : (
          <button onClick={startTest} className='btn  w-100 p-3 btn_gray'>{btnText}</button>
        )
      }
    </>
  )
}

export default ButtonTest