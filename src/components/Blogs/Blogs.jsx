import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {blogs} from '../../assets'
import './Blogs.scss'

function Blogs(){
  return<section className="blogs grid wide">
          <h2 className="title">Newar Me</h2>
          <p className="slogan">Our regular updated
          new blogs.</p>
          <span className="headingDesc">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 20mins.</span>
          <div className="blogsList row">
            <div className="col l-4 m-4 c-12">
              <div className="blog">
                <div className="image">
                  <img src={blogs.motorbike} alt="" />
                </div>
                <div className="content">
                  <h3>Riders</h3>
                  <p>We store the vast majority of the digital assets in secure ..</p>
                  <div className="button green">
                    <span>Apply Now</span>
                    <div className="icon">
                      <FontAwesomeIcon icon='chevron-right'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="blog">
                <div className="image">
                  <img src={blogs.boltfood} alt="" />
                </div>
                <div className="content">
                  <h3>Restaurants</h3>
                  <p>We store the vast majority of the digital assets in secure ..</p>
                  <div className="button orange">
                    <span>Apply Now</span>
                    <div className="icon">
                      <FontAwesomeIcon icon='chevron-right'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="blog">
                <div className="image">
                  <img src={blogs.together} alt="" />
                </div>
                <div className="content">
                  <h3>Community</h3>
                  <p>We store the vast majority of the digital assets in secure ..</p>
                  <div className="button yellow">
                    <span>Apply Now</span>
                    <div className="icon">
                      <FontAwesomeIcon icon='chevron-right'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
}

export default Blogs