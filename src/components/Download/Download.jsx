import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {images} from '../../assets'
import './Download.scss'
import {useState} from 'react'

function Download(){
  const [location, setLocation] = useState('')
  const handleSubmitLocation = (e) =>{
    e.preventDefault()
    if(location){
      alert(`Địa chỉ cần xử lý: ${location}`)
    }else{
      alert(`Vui lòng nhập địa chỉ!`)
    }
  }
  return <section className="download grid wide">
            <div className="row">
              <div className="downloadScreen col l-6 m-6 c-0">
                  <img src={images.screen} alt="" />
              </div>
              <div className="downloadContent col l-6 m-6 c-12">
                  <h2>Have you got our App?</h2>
                  <p>Best cooks and best delivery guys all at your service. Hot tasty food</p>
                  <div className="buttons">
                    <div className="button">  
                      <div className="image">
                        <img src={images.appstore} alt="" />
                      </div>
                      <span>App Store</span>
                    </div>
                    <div className="button">
                      <div className="image">
                        <img src={images.playstore} alt="" />
                      </div>
                      <span>Play Store</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="banner row">    
                  <div className="text orange l-6 m-6 c-12">
                    <h2>Subscribe newsletter</h2>
                    <p>Best cooks and best delivery guys all at your service. Hot tasty food</p>
                  </div>
                  <div className="saleOff yellow l-6 m-6 c-12">
                    <form action="">
                      <div className="formGroup">
                        <input type="text" 
                                className="formInput" 
                                placeholder="Enter your email address..."
                                id="email"
                                name="email"
                                value={location} 
                                onChange={e=>setLocation(e.target.value)} 
                        />
                        <button className="button green"
                                onClick={e=>handleSubmitLocation(e)}
                        >
                          <span>Discover</span>
                          <div className="icon">
                            <FontAwesomeIcon icon="chevron-right" />
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
            </div>
  </section>
}

export default Download