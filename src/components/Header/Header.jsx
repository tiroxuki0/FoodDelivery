import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {images} from '../../assets'
import {useState, useEffect} from 'react'
import SignUp  from '../SignUp/SignUp'
import Cart  from '../Cart/Cart'
import ScrollToTop  from '../SrollToTop/ScrollToTop'

function Header(){
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const [bars, setBars] = useState(true)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  useEffect(()=>{ 
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        setShowScrollToTop(!showScrollToTop)
        $('.header').classList.add('fixed')
      }else{
        setShowScrollToTop(false)
        $('.header').classList.remove('fixed')
      }
    })
    return ()=>{
      window.removeEventListener('scroll')
    }
  },[])
  /* handle event onclick bars button */
  const handleBars = () =>{
    const barsAnimation = $('.bars svg').animate([{
      transform: 'rotate(180deg)'
    }],{
      duration: 200
    })
    $('.headerMenu').classList.toggle('active')
    setBars(!bars)
  }
  
  /* call sign up form */
  const handleCallSignUp = () =>{
    setCount(count + 1)
  }
  
  const handleCallCart = () =>{
    setCart(cart + 1)
  }

  console.log('rerender header');
  return<>
    {showScrollToTop && <ScrollToTop />}
    <SignUp count={count} />
    <Cart cart={cart}/>
    <header className="header grid wide">
      <div className="headerInner row">
        <div className=" col l-2">
          <div className="icon">
            <img src={images.Logo}/>
          </div>
        </div>
        <div className="headerMenu col l-6 m-6 ">
          <ul>
              <li><a /* href="" */>Home</a></li>
              <li><a /* href="" */>Review</a></li>
              <li><a /* href="" */>About</a></li>
              <li><a /* href="" */>Contact us</a></li>
          </ul>
        </div>
        <div className="col l-2">
            <div className="headerSignup">
              <div className="bars" onClick={handleBars}>
                {bars && <FontAwesomeIcon icon='bars'/>
                    || <FontAwesomeIcon icon='times'/>
                }
              </div>
              <div className="signUp"
                  onClick={handleCallSignUp}
              >
                  <span>Sign in</span>
              </div>
              <div className="cart"
                    onClick={handleCallCart}  
              >
                <FontAwesomeIcon icon='shopping-cart'/>
              </div>
            </div>
        </div>
      </div>
    </header>
  </>
}

export default Header