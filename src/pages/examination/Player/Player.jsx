import React from 'react'
import './Player.scss'

const playerData = [
  {
    id:1,
    number:1,
    title:'Listen',
    subTitle:'Listen to the question.',

  },
  {
    id:2,
    number:2,
    title:'Repeat',
    subTitle:'Lets try that question again or see the question via text.',

  },
  {
    id:3,
    number:3,
    title:'Record',
    subTitle:'Recording will start automatically.',

  },
]

const Player = () => {
  return (
    <div className='row mt-5'>
        {
          playerData.map(item => (
            <div key={item.id} className='col-12 col-sm-12 col-md-4 col-xl-4'>
              <div className='card player_card' >
                <div className='card_circle'>
                  <h1>{item.number}</h1>
                </div>
                <div className='card-header player_card-header text-center'>
                  <h6 className='mt-5'>{item.title}</h6>
                  <p className='mt-3'>{item.subTitle}</p>
                </div>

              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Player