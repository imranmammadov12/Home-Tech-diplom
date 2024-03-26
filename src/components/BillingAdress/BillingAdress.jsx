import React, {useState,useEffect} from 'react';
import {Container, Row, Col, Form, FormGroup, Input} from 'reactstrap';
import Helmet from '../Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BillingAdress = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const navigate = useNavigate();


    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');
    const [input4Value, setInput4Value] = useState('');


    const handleChangeInput1 = (e) => {
        const value = e.target.value;
        setInput1Value(value);
      };
      
      
      
      const handleChangeInput2 = (e) => {
        const value = e.target.value;
        setInput2Value(value);
      };
      
      
      const handleChangeInput3 = (e) => {
        const value = e.target.value;
        setInput3Value(value);
      };
      
      
      const handleChangeInput4 = (e) => {
        const value = e.target.value;
        setInput4Value(value);
      };


    const handlePayment = () =>{
        if(input1Value === '' || input2Value === '' || input3Value === '' || input4Value === ''){
          toast.error('Please fill in all fields!')
        }
        else{
          navigate('/payment');
        } 
     }

     useEffect(()=>{
        window.scrollTo(0,0)
      }, []);


  return (
    <Helmet title ='Billing'>
        <CommonSection title='Billing Adress' />
        <section className="checkout__page">
    <Container>
        <Row>
    <Col lg='6'>

      <h4 className='mb-4 fw-bold'>Billing Adress</h4>


        <Form className='billing__form'>
            <FormGroup className='form__group mt-4'>
                <label> First name
                <Input type='text'className="w-100 shadow-none" onChange={handleChangeInput1}/>
                </label>
            </FormGroup>


            <FormGroup className='form__group mt-2'>
                <label> Last name
                <Input type='text' className="w-100 shadow-none" onChange={handleChangeInput2}/>
                </label>
            </FormGroup>


            <FormGroup className='form__group mt-2'>
                <label> Email
                <Input type='text' className="w-100 shadow-none" onChange={handleChangeInput3}/>
                </label>
            </FormGroup>


            <FormGroup className='form__group mt-2'>
                <label> Adress
                <Input type='text' className="w-100 shadow-none" placeholder='contry, city, st, hse'onChange={handleChangeInput4}/>
                </label>
            </FormGroup>
        </Form>
        <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={handlePayment}>Go to Payment</motion.button>
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

export default BillingAdress