import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import tdImg from '../assets/images/arm-chair-01.jpg'


import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Cart = () => {

  return (
    <Helmet title='Cart'>
        <CommonSection title='Shopping Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='9'>             
              <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <img src={tdImg} alt="" />
                      </td>
                      <td>Moder Arm Chair</td>
                      <td>$299</td>
                      <td>2px</td>
                      <td><i class="ri-delete-bin-line"></i></td>

                    </tr>
                  </tbody>
                </table>
              
              </Col>

              <Col lg='3'>
                <div>
                  <h6 className='d-flex align-items-center justify-content-between'>
                    Subtotal
                  <span className='fs-4 fw-bold'>$</span>
                  </h6>
                </div>
                <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                <div>
            
                  <button className="buy__btn w-100"><Link to='/checkout'>Checkout</Link></button>

                  <button className="buy__btn w-100  mt-3"><Link to='/shop'>Continue Shopping</Link></button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  );
};


export default Cart