import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../Helmet/Helmet';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CommonSection from '../UI/CommonSection';
import { cartActions } from '../../redux/slices/cartSlice';

const Payment = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);


    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    const navigate = useNavigate();


// VALID FORM CHECK!

const dispatch = useDispatch();

const [input1Value, setInput1Value] = useState('');
const [input2Value, setInput2Value] = useState('');
const [input3Value, setInput3Value] = useState('');
const [input4Value, setInput4Value] = useState('');

const [error1, setError1] = useState('');
const [error2, setError2] = useState('');
const [error3, setError3] = useState('');
const [error4, setError4] = useState('');


const isValidCreditCardNumber = (value) => {
  const cleanedNumber = value.replace(/\D/g, '');
  let sum = 0;
  let isEven = false;

  for (let i = cleanedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedNumber.charAt(i), 10);

      if (isEven) {
          digit *= 2;
          if (digit > 9) {
              digit -= 9;
          }
      }

      sum += digit;
      isEven = !isEven;
  }

  return sum % 10 === 0;
};


const handleChangeInput1 = (e) => {
  const value = e.target.value;
  if(/^[a-zA-Z\s]*$/.test(value) || value === ''){
    setInput1Value(value);
    setError1(null);
  } else {
    setError1('Enter only letters please');
  }
};



const handleChangeInput2 = (e) => {
  const value = e.target.value;

  if (!/^\d*$/.test(value)) {
      return;
  }

  setInput2Value(value);
  setError2(isValidCreditCardNumber(value) ? '' : 'Enter a valid credit card number');
};


const handleChangeInput3 = (e) => {
  const value = e.target.value;
  const cleanedValue = value.replace(/\D/g, '');

  if (/^\d*$/.test(cleanedValue)) {
    const month = cleanedValue.slice(0, 2);
    const year = cleanedValue.slice(2, 4);

    setExpiryMonth(month);
    setExpiryYear(year);
    setInput3Value(`${month}/${year}`);
    setError3(null);
  } else {
    setError3('Enter a valid expiration date');
  }
}


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
    dispatch(cartActions.clearCart()); 
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
            <Form className='billing__form'>
                <FormGroup className='form__group mt-4'>
                    <label> Name on card
                    <Input type='text'className="w-100 shadow-none" name="name" placeholder='NAME SURNAME' onChange={handleChangeInput1} />
                    <small className='text-muted'>Full name as displayed on card</small>
                    {
                      error1 && <p style={{color: 'red', fontSize: 12}}>{error1}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Credit card number
                    <Input type='text' className="w-100 shadow-none" maxLength={16} name="cardNumber" placeholder='****-****-****-****' value={input2Value} onChange={handleChangeInput2} />
                    {
                      error2 && <p style={{color: 'red', fontSize: 12}}>{error2}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> Expiration
                    <Input type='text' className="w-100 shadow-none" name="expiration" placeholder='MM/YY' value={input3Value} onChange={handleChangeInput3}/>
                    {
                      error3 && <p style={{color: 'red', fontSize: 12}}>{error3}</p>
                    }
                    </label>
                </FormGroup>


                <FormGroup className='form__group mt-2'>
                    <label> CVV
                    <Input type='password' className="w-100 shadow-none" maxLength={4} name="cvv" placeholder='123'  onChange={handleChangeInput4}/>
                    {
                      error4 && <p style={{color: 'red', fontSize: 12}}>{error4}</p>
                    }
                    </label>
                </FormGroup>
            </Form>

            <motion.button whileTap={{scale:1.2}} className='buy__btn'  onClick={handlePay}>Pay</motion.button>
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