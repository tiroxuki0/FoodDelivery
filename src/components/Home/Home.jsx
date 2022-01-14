import './Home.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {images} from '../../assets'
import { useState } from 'react'
import { useFood,actions } from '../Context'
import Slider  from '../Slider/Slider'

function Home(){
  const [location, setLocation] = useState('')
  const handleSubmitLocation = (e) =>{
    e.preventDefault()
    if(location){
      alert(`Địa chỉ cần xử lý: ${location}`)
    }else{
      alert(`Vui lòng nhập địa chỉ!`)
    }
  }
  console.log('rerender home');
  const [state, dispatch] = useFood()
  const {callSignUp} = state
  const handleCallSignUp = () =>{
    dispatch(actions.CallSignUp(callSignUp + 1))
  }

  return<>
    <section className="home grid wide">
      <div className="homeInner row">
          <div className="homeContent col l-6 m-12 c-12">
            <h3 className="title">Hungry?</h3>
            <h2 className="slogan">Wait a minute for
            delicious.</h2>
            <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 20mins.</p>
            <form className="enterLocation">
                <input value={location} onChange={e=>setLocation(e.target.value)} type="text" placeholder='Enter your delivery location'/>
                <button onClick={e=>handleSubmitLocation(e)}>
                  <span>Discover</span>
                  <div className="forwardIcon">
                    <FontAwesomeIcon icon="chevron-right"/>
                  </div>
                </button>
            </form>
            <p>Already member of our communty? <span id="signIn" onClick={handleCallSignUp}>Sign in</span></p>
          </div>
          <div className="homeImage col l-6 m-0 c-0">
            <img src={images.home}/>
          </div>
      </div>
    </section>
  </>
}

export default Home