/* get window width to responsive  */
import {useViewPort} from '../hooks'
/* slider */
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination,  Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination';

import {images} from '../../assets'
import './Offer.scss'

function Offer(){
  const viewport = useViewPort()
  const isPClowSolution = viewport.width >= 1113
  const isTablet = viewport.width >= 740
  const isMobile = viewport.width >= 500
  
  return<section className="offer grid wide">
            <h2 className="title">Hungry?</h2>
            <p className="slogan">Wait a minute for delicious.</p>
            <div className="row">
            <div className="offerList col l-12 m-12 c-12">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  autoplay={{ delay: 2000,
                    disableOnInteraction: false
                   }}
                  pagination
                  spaceBetween= {20}
                  slidesPerView={isPClowSolution ? 3 : isTablet ? 3 : isMobile ? 1 : 1}
                  /* onSlideChange={() => console.log('slide change')} */
                  /* onSwiper={(swiper) => console.log(swiper)} */
                >
                    <SwiperSlide>
                    <div className="item">
                      <img src={images.checklistIcon} alt="" />
                      <h3>Easy to order</h3>
                      <span>In restaurant-controlled online food ordering, the restaurant ..</span>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <img src={images.mapIcon} alt="" />
                        <h3>Live Order</h3>
                        <span>In addition to paying for the food, customers will often have to pay ..</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <img src={images.pizzaIcon} alt="" />
                        <h3>Easy to order</h3>
                        <span>Grocery delivery companies will deliver groceries, pre-prep ..</span>
                      </div>
                    </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="banner row">    
                  <div className="text yellow l-6 m-6 c-12">
                    <h2>Have you got our offer?</h2>
                    <p>Best cooks and best delivery guys all at your service. Hot tasty food</p>
                  </div>
                  <div className="saleOff green l-6 m-6 c-12">
                    <img src={images.earthenPot} alt="" />
                    <img src={images.Abstract2} alt="" />
                    <img src={images.bigBowl} alt="" />
                    <img src={images.bowl} alt="" />
                    <img src={images.Abstract1} alt="" />
                    <h3 className="salePercen title">
                      50% <br/> 
                      <span>off</span>
                    </h3>    
                  </div>
            </div>
  </section>
}

export default Offer