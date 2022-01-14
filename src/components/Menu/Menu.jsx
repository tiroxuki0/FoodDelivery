import {useEffect} from 'react'
import './Menu.scss'
import {menu} from '../../assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useViewPort} from '../hooks'

const menuRender = [
  {
    stars: 5,
    name: 'New York-Style pizza',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.pizza,
    price: 7.10
  },
  {
    stars: 5,
    name: 'Bento Ekiben Makunchi ..',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.bento,
    price: 4.80
  },
  {
    stars: 5,
    name: 'Indian Cusine Briyani Buffet',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.indianCusine,
    price: 5.10
  },
  {
    stars: 5,
    name: 'Chiken Tikka Buffalo Wing ..',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.tikka,
    price: 3.60
  },
  {
    stars: 5,
    name: 'Fsish Fry Shashik Freid Fish ..',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.fish,
    price: 6.40
  },
  {
    stars: 5,
    name: 'Humburger Veggei ..',
    desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
    image: menu.burger,
    price: 6.40
  },

]

function renderStars(number){
  const stars = new Array(number)
  return stars
}

function Menu(){
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const viewport = useViewPort()
  const isTablet = viewport.width <= 740
  
  useEffect(()=>{
    const list = Array.from($$('.menuList .item'))
    console.log(list);
    if(isTablet){
      list.map((i,index)=>{
        if(index>2){
          i.parentElement.classList.add('c-0')
        }else{
          i.parentElement.classList.add('c-12')
        }
      })
    }else{
      list.map((i,index)=>{
        if(index>2){
          i.parentElement.classList.remove('c-0')
        }else{
          i.parentElement.classList.remove('c-12')
        }
      })
    }
  },[isTablet])

  return<section className="menu grid wide">
    <div className="menuHeading row">
      <h2 className="title">Popular Menu</h2>
      <p className="slogan">Wait a minute for delicious.</p>
    </div>
    <div className="menuList row">
        {
          menuRender.map((item,index)=>{
            return<div key={index} className="col l-4 m-4">
                    <div className="item">
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="content">
                        {/* <div className="stars">
                          {
                            renderStars(item.stars).map(()=>{
                              return<FontAwesomeIcon icon="star"/>
                            })
                            
                          }
                        </div> */}
                        <h2 className="name">{item.name}</h2>
                        <p className="desc">{item.desc}</p>
                        <div className="price">
                          <div className="priceLeft"><span>$</span>{item.price}</div>
                          <div className="priceRight">
                            <div className="heart">
                              <FontAwesomeIcon icon="heart" />
                            </div>
                            <div className="share">
                              <FontAwesomeIcon icon="share-alt" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          })
        }
    </div>
    <div className="seeAll row">
      <div className="button green">
        <span>See All Menu</span>
        <div className="icon">
          <FontAwesomeIcon icon="chevron-right"/>
        </div>
      </div>
    </div>
  </section>
}

export default Menu