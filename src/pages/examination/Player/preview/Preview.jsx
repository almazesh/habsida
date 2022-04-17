import React from 'react'
import './Preview.scss'
import first from '../../../../assets/preview/first.png'
import second from '../../../../assets/preview/second.png'
import third from '../../../../assets/preview/three.png'
import left from '../../../../assets/preview/left.png'
import midd from '../../../../assets/preview/midd.png'
import right from '../../../../assets/preview/right.png'
import bottom from '../../../../assets/preview/bottom.png'
import four from '../../../../assets/preview/four.png'

const Preview = ({preview}) => {
  return (
    <>
      {
       preview && (
          <div className='preview_main'>
            <div className='first_block'>
              <img src={first} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus nemo obcaecati soluta facere sit doloremque ut quod minus dolor nisi iste, dignissimos um aspernatur at!
              </p>
              <img src={left} alt="" className='left'/>
            </div>
            <div className='second_block'>
              <img src={second} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus nemo obcaecati soluta facere sit doloremque ut quod minus dolor nisi isteus earum aspernatur at!
              </p>
              <img src={midd} alt="" className='midd'/>
            </div>
            <div className='third_block'>
              <img src={third} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus nemo obcaecati soluta facere sit doloremque ut quod minus dolor nisi isteaspernatur at!
              </p>
              <img src={right} alt="" />
            </div>
            <div className='four_block'>
              <img src={four} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus nemo obcaecati soluta facere sit doloremque ut quod minus dolor nisi isteaspernatur at!
              </p>
              <img src={bottom} alt="" className='bottom'/>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Preview