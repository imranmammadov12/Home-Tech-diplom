import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../Helmet/Helmet';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CommonSection from '../UI/CommonSection';

const Payment = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const navigate = useNavigate();


// VALID FORM CHECK!



const [input1Value, setInput1Value] = useState('');
const [input2Value, setInput2Value] = useState('');
const [input3Value, setInput3Value] = useState('');
const [input4Value, setInput4Value] = useState('');

const [error1, setError1] = useState('');
const [error2, setError2] = useState('');
const [error3, setError3] = useState('');
const [error4, setError4] = useState('');

const handleChangeInput1 = (e) => {
  const value = e.target.value;
  if(/^[a-zA-Z]*$/.test(value) || value === ''){
    setInput1Value(value);
    setError1(null);
  } else {
    setError1('Enter only letters please');
  }
};



const handleChangeInput2 = (e) => {
  const value = e.target.value;
  if(/^[0-9]*$/.test(value) || value === ''){
    setInput2Value(value);
    setError2(null);
  } else {
    setError2('Enter only digits please');
  }
};


const handleChangeInput3 = (e) => {
  const value = e.target.value;
  if(/^[0-9]*$/.test(value) || value === ''){
    setInput3Value(value);
    setError3(null);
  } else {
    setError3('Enter only digits please');
  }
};


const handleChangeInput4 = (e) => {
  const value = e.target.value;
  if(/^[0-9]*$/.test(value) || value === ''){
    setInput4Value(value);
    setError4(null);
  } else {
    setError4('Enter only digits please');
  }
};


  const handlePay = () =>{
        if(input1Value === '' || input2Value === '' || input3Value === '' || input4Value === ''){
          toast.error('Please fill in all fields and fill correctly!')
          return;
        }
        if(!error1 && !error2 && !error3 && !error4){
          toast.success('Purchase completed successfully!');
          navigate('/home');
        } 
     }


     useEffect(()=>{
        window.scrollTo(0,0)
      }, []);


  return (
    <Helmet title='Payment'>
        <CommonSection title='Payment' />
        <section className="checkout__page">
  <Container>
    <Row>
    <Col lg='6'>
      <div className="form-group d-flex flex-column">
        <div className="form-group d-flex flex-column">
          <h4 className='mb-4 fw-bold'>Payment</h4>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input shadow-none" id="masterCard" />
            <label className="form-check-label" htmlFor="masterCard"><i class="ri-mastercard-line"></i> Master Card</label>
          </div>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input shadow-none" id="visa" />
            <label className="form-check-label" htmlFor="visa"><i class="ri-visa-fill"></i> Visa</label>
          </div>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input shadow-none" id="paypal" />
            <label className="form-check-label" htmlFor="paypal"><i class="ri-paypal-line"></i> Paypal</label>
          </div>
        </div>


            <Form className='billing__form'>
                <FormGroup className='form__group mt-4'>
                    <label> Name on card
                    <Input type='text'className="w-100 shadow-none" name="name" onChange={handleChangeInput1} />
                    <small className='text-muted'>Full name as displayed on card</small>
                    {
                      error1 && <p style={{color: 'red', fontSize: 12}}>{error1}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Credit card number
                    <Input type='text' className="w-100 shadow-none" name="cardNumber" onChange={handleChangeInput2} />
                    {
                      error2 && <p style={{color: 'red', fontSize: 12}}>{error2}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Expiration
                    <Input type='text' className="w-100 shadow-none" name="expiration" onChange={handleChangeInput3}/>
                    {
                      error3 && <p style={{color: 'red', fontSize: 12}}>{error3}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> CVV
                    <Input type='password' className="w-100 shadow-none" name="cvv"  onChange={handleChangeInput4}/>
                    {
                      error4 && <p style={{color: 'red', fontSize: 12}}>{error4}</p>
                    }
                    </label>
                </FormGroup>
            </Form>

            <motion.button whileTap={{scale:1.2}} className='buy__btn'  onClick={handlePay}>Pay</motion.button>
            </div>
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

export default Payment;