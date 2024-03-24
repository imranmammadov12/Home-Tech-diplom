import React, {useRef, useNavigate} from 'react';
import './header.css';
import logo from '../../assets/images/logo1.svg';
import { Container, Row } from 'reactstrap';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';


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


  return (
    <header className='header'>
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

                  <div className="navigation">
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
                    <span className='fav__icon'>
                      <i class="ri-heart-line"></i>
                      <span className="badge">2</span>
                    </span>
                    <span className='cart__icon'>
                      <i class="ri-shopping-bag-line"></i>
                      <span className="badge">2</span>
                      </span>

                    <span>
                      <motion.img whileTap={{scale: 1.9}} src={userIcon} alt=''/>
                      </span>
                      
                  <div className="mobile__menu">
                    <span>
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

export default Header