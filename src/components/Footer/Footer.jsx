import './Footer.scss'
import {images} from '../../assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Footer(){
  return<section className="footer">
          <div className="footerInner grid wide">
            <div className="row">
              <div className="col l-4 m-4 c-4">
                <div className="heading">
                  <img src={images.Logo} alt="" />
                </div>
                <div className="content">
                  <p>Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery</p>
                  <div className="icons ">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
                    <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
                    <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                  </div>
                </div>
              </div>
              <div className="col l-2 m-2 c-0">
                  <div className="heading">
                    <h3>Company</h3>
                  </div>
                  <div className="content">
                    <ul>
                      <li>About</li>
                      <li>Terms of Use</li>
                      <li>Privacy Policy</li>
                      <li>How it Works</li>
                      <li>Cotact Us</li>
                    </ul>
                  </div>
              </div>
              <div className="col l-2 m-2 c-0">
                  <div className="heading">
                    <h3>Get Help</h3>
                  </div>
                  <div className="content">
                    <ul>
                      <li>Support Carrer</li>
                      <li>24h Service</li>
                      <li>Quick Chat</li>
                    </ul>
                  </div>
              </div>
              <div className="col l-2 m-2 c-0">
                  <div className="heading">
                    <h3>Support</h3>
                  </div>
                  <div className="content">
                    <ul>
                      <li>FAQ</li>
                      <li>Policy</li>
                      <li>Business</li>
                    </ul>
                  </div>
              </div>
              <div className="col l-2 m-2 c-0">
                  <div className="heading">
                    <h3>Contact</h3>
                  </div>
                  <div className="content">
                    <ul>
                      <li>WhatsApp</li>
                      <li>Support 24</li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className="created row">
              <div>Copyright © 2021 Besnik.com</div>
              <div>Created by <span>Besnik</span> and Coded by <span>MinhHuy</span></div>
            </div>
          </div>
  </section>
}

export default Footer