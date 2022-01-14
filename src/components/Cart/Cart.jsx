import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Cart.scss'
import {images} from '../../assets/'
import {memo, useEffect, useState} from 'react'

const products = [
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
]

function Cart({cart}){
  console.log('rerender Cart');
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const listProd = Array.from($$('.productItem'))
    listProd.forEach(prod=>{
      prod.querySelector('.quantity').value = 1
    })
    
    setTotal(products.reduce((total, prod)=>{
      return total + prod.price * prod.quantity
    },0))

    const cartFormWrapper = $('.cartFormWrapper')
    const cartForm = $('.cartForm')
    cartFormWrapper.onclick = (e) =>{
      if(e.target == cartFormWrapper){
      cartForm.style.transform = 'translateX(200%)'
      cartForm.style.opacity = 0
      cartForm.style.visibility = 'hidden'
      setTimeout(() => {
        cartFormWrapper.style.opacity = 0
        cartFormWrapper.style.visibility = 'hidden'
      }, 500);
      }
    }
    $('.closeCart').onclick = () =>{
      cartForm.style.transform = 'translateX(200%)'
      cartForm.style.opacity = 0
      cartForm.style.visibility = 'hidden'
      setTimeout(() => {
        cartFormWrapper.style.opacity = 0
        cartFormWrapper.style.visibility = 'hidden'
      }, 500);
    }
  },[])

  useEffect(()=>{
    if(cart > 0){
      $('.cartFormWrapper').style.opacity = 1
      $('.cartFormWrapper').style.visibility = 'visible'
      $('.cartForm').style.transform = 'translateX(0%)'
      $('.cartForm').style.opacity = 1
      $('.cartForm').style.visibility = 'visible'
    }
  },[cart])

  function getParent(selector, parent){
    while(selector.parentElement){
      if(selector.parentElement.matches(parent)){
          return selector.parentElement
      }
      selector = selector.parentElement
    }
  }

  function getQuantity(selector){
    const parent = getParent(selector, `.controlsQuantity`)
    const quantityElement = parent.querySelector('.quantity')
    return quantityElement
  }

  const handleDecrease = (e)=>{
    const quantityElement = getQuantity(e.target)
    const item = getParent(e.target, `.productItem`)
      let quantity = parseInt(quantityElement.value)
      if(quantity > 1){
        quantity = quantity - 1
        quantityElement.value = quantity
      }else{
        item.remove()
      }
      TotalCalculator()
    }
    const handleIncrease = (e)=>{
      const quantityElement = getQuantity(e.target)
      let quantity = parseInt(quantityElement.value)
      if(quantity < 100){
        quantity = quantity + 1
        quantityElement.value = quantity
      }
      TotalCalculator()
  }

  const handleChangeTotal = () => {
    TotalCalculator()
  }

  function TotalCalculator(){
    const listProdItem = Array.from($$('.productItem'))
    setTotal(listProdItem.reduce((total, prod)=>{
      return total + parseInt(prod.querySelector('.prodPrice').innerText)
                      *
                      parseInt(prod.querySelector('.quantity').value)
                      
    },0))
  }

  return<>
    <div className="cartFormWrapper">
      <div className="cartForm">
          <div className="heading">
            <div className="closeCart">
                <FontAwesomeIcon icon='arrow-left'/>
            </div>
            <h2>My cart</h2>
          </div>
          <div className="cartFormProducts">
            <div className="products">
              <ul className="productList">
                {
                  products.map(prod=>{
                    return<li key={prod.id} className="productItem">
                            <div className="prodImage">
                              <img src={prod.image} alt="" />
                            </div>
                            <div className="prodInfo">
                              <h3>{prod.name}</h3>
                              <span>size</span>
                              <p>$ <span className="prodPrice">{prod.price}</span></p>
                            </div>
                            <div className="controlsQuantity">
                                <input type="button" 
                                      value="-" 
                                      className="increaseQuantity"
                                      onClick={e=>handleDecrease(e)}
                                />
                                <input type="text" 
                                      className="quantity" 
                                      onChange={handleChangeTotal}
                                ></input>
                                <input type="button" 
                                      value="+" 
                                      className="decreaseQuantity"
                                      onClick={e=>handleIncrease(e)}
                                />
                            </div>
                          </li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className="cartSubmit">
              <div className="total">
                <span>Total:</span>
                <h3>{isNaN(total) ? 0 : total} $</h3>
              </div>
              <input type="submit" value="Buy Now"/>
          </div>
      </div>  
    </div>
  </>
}
export default memo(Cart)