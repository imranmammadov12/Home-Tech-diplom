import React, {useRef, useEffect} from 'react';
import './header.css';
import logo from '../../assets/images/logo1.svg';
import { Container, Row } from 'reactstrap';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const nav__links = [
  {
    path: 'home',
    display: 'Main'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]


const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalQuantityFavorites = useSelector(state => state.favorite.totalQuantity);


  const menuRef = useRef(null);
  const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
      stickyHeaderFunc()

      return () => window.removeEventListener('scroll', stickyHeaderFunc)
  });



  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
        navigate('/cart')
  };

  const navigateToFavorite = () => {
    navigate('/favorite')
  }


  return (
    <header className='header' ref={headerRef}>
     <Container>
            <Row>
              <div className="nav__wrapper">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <div>
                    <Link to={'/home'}>
                    <h1>Home & Tech</h1>
                    </Link>
                  </div>
                </div>

                  <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <ul className="menu">
                        {nav__links.map((item, index) =>(
                            <li className="nav__item" key={index}>
                              <NavLink to={item.path} className={(navClass) =>
                              navClass.isActive ? 'nav__active' : ''}
                              >
                                {item.display}
                              </NavLink>
                            </li>
                          ))}
                    </ul>
                  </div>

                  <div className="nav__icons">
                    <span className='fav__icon' onClick={navigateToFavorite}>
                      <i class="ri-heart-line"></i>
                      <span className="badge">{totalQuantityFavorites}</span>
                    </span>
                    <span className='cart__icon' onClick={navigateToCart}>
                      <i class="ri-shopping-bag-line"></i>
                      <span className="badge">{totalQuantity}</span>
                      </span>
                  <div className="mobile__menu">
                    <span onClick={menuToggle}>
                      <i class="ri-menu-line"></i>
                      </span>
                  </div>
                  </div>

              </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header;