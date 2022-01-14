import './Location.scss'
import {images} from '../../assets'

function Location(){
  return<section className="location grid wide">
      <h3 className="title">Newar Me</h3>
      <p className="slogan">Find us near your
citys.</p>
      <div className="row">
        <div className="col l-6 m-6 c-12">
          <form className="locationContent">
            <div className="heading">
              <h2>Pickup restaurent point</h2>
              <p>Enter your delivery location</p>
              <div className="distance">
                <span>10m.</span>
              </div>
            </div>
            <div className=" formGroup">
              <p>DEPATURE</p>
              <label htmlFor="yourlocation">Pickup restaurent point</label>
              <div className="input">
                <input type="text" 
                      id="restaurent" 
                      name="restaurent"
                      placeholder="Enter restaurent location here..."
                />
                <img src={images.locationIcon} alt="" />
              </div>
              <span className="formMessage"></span>
            </div>
            <div className=" formGroup">
              <p>ARRIVE</p>
              <label htmlFor="yourlocation">Drop home location</label>
              <div className="input">
                <input type="text" 
                      id="yourhome" 
                      name="yourhome"
                      placeholder="Enter your home location here..."
                />
                 <img src={images.locationIcon} alt="" />
              </div>
              <span className="formMessage"></span>
            </div>
          </form>
        </div>
        <div className="col l-6 m-6 c-0">
          <div className="locationMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31358.854997056314!2d106.6205678372828!3d10.745512173222423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2zUXXhuq1uIDYsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642067189676!5m2!1svi!2s" style={{border: 0, width: '100%', height: '490px'}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
  </section>
}

export default Location