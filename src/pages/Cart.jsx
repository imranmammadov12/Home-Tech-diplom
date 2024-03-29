import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import { motion } from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();
  const cartItems = useSelector(state=> state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const handleCheckout = (e) =>{
    if(totalAmount === 0){
      toast.error('Your cart is empty. Please add items to your cart before checking out.');
      return;
    } else {
      navigate('/checkout');
    }
  }


  useEffect(()=>{  
    window.scrollTo(0,0)
  }, []);

  return (
    <Helmet title='Cart'>
        <CommonSection title='Shopping Cart' />
        <section>
          <Container>
            <Row>
            <Col lg='9'>             
              {cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : (<table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cartItems.map((item,index) =>(
                        <Tr item={item} key={{index}} />
                      ))
                    }
                  </tbody>
                </table>
                )}
              </Col>

              <Col lg='3'>
                <div>
                  <h6 className='d-flex align-items-center justify-content-between'>
                    Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                  </h6>
                </div>
                <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                <div>
            
                <button className="buy__btn w-100" onClick={handleCheckout}>Checkout</button>

                  <button className="buy__btn w-100  mt-3"><Link to='/shop'>Continue Shopping</Link></button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  );
};

const Tr = ({item}) =>{
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return(
    <tr>
      <td>
      <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
      <motion.i whileTap={{scale:5.2}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i>
      </td>
      </tr>
  )
}

export default Cart;