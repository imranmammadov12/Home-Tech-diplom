import React, { useEffect } from 'react'
import './footer.css';

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo2.svg'

const Footer = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
       <Container>
          <Row>
            <Col lg='4' className='mb-4' md='6'>
            <div className="logo">
                  <img src={logo} alt="logo" />
                  <div>
                    <h1 className='text-white'>Home & Tech</h1>
                  </div>
                </div>
                <p className="footer__text mt-4">
                    "Home Improvement, Tech Style."
                  </p>
            </Col>

            <Col lg='3' className='mb-4' md='4'>
            <div className="footer__quick-links">
                <h4 className="quick__links-title">In social Media</h4>
                <ListGroup className='footer__contact'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-instagram-line"></i></span>
                    <a href="https://www.instagram.com/homeandtechh/"><p>instagram.com/homeandtechh</p></a>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg='2' className='mb-4' md='4'>
            <div className="footer__quick-links">
                <h4 className="quick__links-title">Useful Links</h4>
                <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg='3' className='mb-4' md='3'>
            <div className="footer__quick-links">
                <h4 className="quick__links-title">Contact</h4>
                <ListGroup className='footer__contact'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-2-line"></i></span>
                    <p>66 Tabriz Street, Azerbaijan</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-line"></i></span>
                    <p>+994(50) 231-24-83</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                    <p>imranmammadov12@mail.ru</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg='12'>
              <p className="footer__copyright">Copyright {year} developed by Imran Mammadov. All rights reserved.</p>
            </Col>
          </Row>
       </Container>
    </footer>
  )

}

export default Footer;