import './sass/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './fontawesome'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Offer from './components/Offer/Offer.jsx'
import Menu from './components/Menu/Menu.jsx'
import Location from './components/Location/Location.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Download from './components/Download/Download.jsx'
import Countries from './components/Countries/Countries.jsx';
import Footer from './components/Footer/Footer.jsx'
import {FoodProvider} from './components/Context'

ReactDOM.render(
  <React.StrictMode>
      <FoodProvider>
        <Header/>
        <Home/>
        <Offer />
        <Menu />
        <Location />
        <Blogs />
        <Download />
        <Countries />
        <Footer/>
      </FoodProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
