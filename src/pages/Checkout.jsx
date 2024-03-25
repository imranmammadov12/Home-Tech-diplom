import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);


  return (
    <Helmet title='Checkout'>
        <CommonSection title='Checkout' />
        <section className="checkout__page">
  <Container>
    <Row>
      <Col lg='6'>
        <div className="form-group d-flex flex-column">
          <h4 className='mb-4 fw-bold'>Payment</h4>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input" id="masterCard" />
            <label className="form-check-label" htmlFor="masterCard"><i class="ri-mastercard-line"></i> Master Card</label>
          </div>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input" id="visa" />
            <label className="form-check-label" htmlFor="visa"><i class="ri-visa-fill"></i> Visa</label>
          </div>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input" id="paypal" />
            <label className="form-check-label" htmlFor="paypal"><i class="ri-paypal-line"></i> Paypal</label>
          </div>
        </div>


            <Form className='billing__form'>
                <FormGroup className='form__group mt-4'>
                    <label> Name on card
                    <Input type='text'className="w-100 shadow-none" />
                    <small className='text-muted'>Full name as displayed on card</small>
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Credit card number
                    <Input type='text' className="w-100 shadow-none" />
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Expiration
                    <Input type='text' className="w-100 shadow-none"/>
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> CVV
                    <Input type='text' className="w-100 shadow-none"/>
                    </label>
                </FormGroup>
            </Form>

            <motion.button whileTap={{scale:1.2}} className='buy__btn'>Pay</motion.button>
      </Col>


      <Col lg='6'>
            <div className="checkout__cart mt-4">
                <h6>
                    Total Qty: <span>{totalQty} Qty</span>
                </h6>

                <h6>
                    Subtotal: <span>${totalAmount}</span>
                </h6>

                <h6>
                    <span>Shipping: <br/>free shipping:</span><span>$0</span>
                </h6>

                <h6>
                    Free shipping
                </h6>

                <h4>Total Cost: <span>${totalAmount}</span></h4>
            </div>
      </Col>
    </Row>
  </Container>
</section>
    </Helmet>
  )
}

export default Checkout