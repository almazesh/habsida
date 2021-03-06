import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import korea from '../../assets/main/π°π·.png'
import usa from '../../assets/main/πΊπΈ.png'
import './Main.scss'

const langData = [
  {
    id:1,
    img:korea,
    country:'Korean',
    lang:'language',
    route:'korea'
  },
  {
    id:2,
    img:usa,
    country:'English',
    lang:'language',
    route:'eng'
  },
]

const Main = () => {
  const [themeCard , setThemeCard] = useState(1)
  const [route , setRoute] = useState('')
  const navigate = useNavigate()
  const [animateText , setAnimateText] = useState(false)

  const changeThemeBtn = (route) => {
    if(themeCard !== langData.length){
      setThemeCard(themeCard + 1)
      setRoute(route)
    }else if(themeCard === langData.length){
      setThemeCard(1)
      setRoute(route)
    }
  }

  const handleStart = () => {
    if(route){
      navigate('/examination')
    }else{
      setAnimateText(true)
    }
  }

  

  return (
    <section className='section'>
      <div className='col-12 col-sm-12 col-md-12 col-xl-12'>
        <div className='card main_card p-5 text-center'>
          <h4 className={animateText && 'animateText' }>Choose language</h4>

          <div className='row justify-content-center mt-5'>
            {
              langData.map((item) => (
                <div key={item.country} className='col-12 col-sm-12 col-md-6 col-xl-4'>
                  <div  onClick={() => {
                    changeThemeBtn(item.route)
                  }} className={route === item.route ? 'card dark text-light  lang_card  p-5 d-flex justify-content-center align-items-center flex-column' : 'card  lang_card  p-5 d-flex justify-content-center align-items-center flex-column'}>
                      <img src={item.img} className='flag mb-3'/>
                      <h3>
                        {item.country} <br />
                        {item.lang}
                      </h3>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='mt-5 d-flex  justify-content-center pb-5'> 
            <div className='col-xl-4'>
              <button onClick={handleStart} className='btn btn-primary p-3 w-100 btn_test'>
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main