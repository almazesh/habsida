import React from 'react'
import './Modal.scss'
import check from '../../../assets/register/check.png'

const Modal = () => {
  return (
    <div className='col-12 col-sm-8 col-md-8 col-xl-2'>
      <div className="modal fade" id="exampleModal" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-image'>
              <img src={check}/>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-header">
              <h5 className="modal-title">Done!</h5>
            </div>
            <div className="modal-body">
              <p>An email with а link has been sent <br /> to your email address</p>
            </div>
            <div className="modal-footer justify-content-start">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal