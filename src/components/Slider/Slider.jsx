import {images} from '../../assets'
import './Slider.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useViewPort} from '../hooks'
import {Navigation, Pagination, Autoplay} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const foods = [
  {
    id: 1,
    name: 'F. Chicken',
    price: 4.5,
    quantity: 1,
    image: images.chicken
  },
  {
    id: 2,
    name: 'Cocktail',
    price: 2,
    quantity: 1,
    image: images.cocktail
  },
  {
    id: 3,
    name: 'Pizza',
    price: 14,
    quantity: 1,
    image: images.pizza
  },
  {
    id: 4,
    name: 'French F.',
    price: 8,
    quantity: 1,
    image: images.potato
  },
  {
    id: 4,
    name: 'French F.',
    price: 8,
    quantity: 1,
    image: images.potato
  },
  {
    id: 4,
    name: 'French F.',
    price: 8,
    quantity: 1,
    image: images.potato
  },
  {
    id: 4,
    name: 'French F.',
    price: 8,
    quantity: 1,
    image: images.potato
  },
  {
    id: 4,
    name: 'French F.',
    price: 8,
    quantity: 1,
    image: images.potato
  },
]

function Slider(){
  const viewport = useViewPort()
  const isPClowSolution = viewport.width >= 1113
  const isTablet = viewport.width >= 740
  const isMobile = viewport.width >= 500

  return<div className="grid wide">
          <div className="recommend row">
              <div className="col l-12 m-12 c-12">
                <div className="recommendContent">
                  <div className="heading">
                    <h3>Food near me</h3>
                    <img src={images.fire} alt="" />
                  </div>
                  
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 2000,
                      disableOnInteraction: false
                     }}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween= {20}
                    slidesPerView={isPClowSolution ? 4 : isTablet ? 3 : isMobile ? 2 : 1}
                  >
                    {
                      foods.map((food,index)=>{
                        return<SwiperSlide key={index} className="foodItem">
                                    <div className="descItem">
                                      <h3>{food.name}</h3>
                                      <div>
                                        <span>Starting</span>
                                        <p><span>$</span>{food.price}</p>
                                      </div>
                                    </div>
                                    <div className="descImage">
                                      <img src={food.image}/>
                                    </div>
                          </SwiperSlide>
                      })
                    }
                  </Swiper>
                </div>
              </div>
          </div>
        </div>
}

export default Slider