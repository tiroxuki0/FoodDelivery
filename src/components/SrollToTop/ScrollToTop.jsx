import './Scroll.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function ScrollToTop(){
  const handleScrollToTop = () =>{
    window.scroll(0,0)
  }
  return<>
    <div className="scrollTop" onClick={handleScrollToTop}>
        <FontAwesomeIcon icon='chevron-up'/>
    </div>
  </>
}

export default ScrollToTop