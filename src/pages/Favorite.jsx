import React, { useEffect } from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';


import { motion } from 'framer-motion';
import {favoriteActions} from '../redux/slices/favoriteSlice';
import { useSelector, useDispatch, } from 'react-redux';

import { Link } from 'react-router-dom';

const Favorite = () => {


  const favoriteItems = useSelector(state=> state.favorite.favoriteItems);

  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);
  

  return (
    <Helmet title='Favorites'>
        <CommonSection title='Favorites' />
        <section>
          <Container>
            <Row>
              <Col lg='9'>             
              {favoriteItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the favorites</h2>) : (<table className='table bordered'>
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
                      favoriteItems.map((item,index) =>(
                        <Tr item={item} key={{index}} />
                      ))
                    }
                  </tbody>
                </table>
                )}
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
    dispatch(favoriteActions.deleteItem(item.id))
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

export default Favorite;