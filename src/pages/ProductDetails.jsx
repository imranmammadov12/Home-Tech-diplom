import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {motion} from 'framer-motion';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import '../styles/product-details.css'

const ProductDetails = () => {

  const [tab,setTab] = useState('desc');

  const {id} = useParams()
  const product = products.find(item => item.id === id);
  
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc , category} = product;




  return  (
      <Helmet title={productName}>
        <CommonSection title={productName} />
          <section className='pt-0'>
            <Container>
              <Row>
                <Col lg='6'>
                  <img src={imgUrl} alt="" />
                </Col>
  
                <Col lg='6'>
                  <div className="product__details">
                    <h2>{productName}</h2>
                    <div className="product__rating d-flex align-items-center gap-5 mb-3">
                      <div>
                        <span><i class="ri-star-s-fill"></i></span>
                        <span><i class="ri-star-s-fill"></i></span>
                        <span><i class="ri-star-s-fill"></i></span>
                        <span><i class="ri-star-s-fill"></i></span>
                        <span><i class="ri-star-half-fill"></i></span>
                      </div>
  
                        <p>(<span>{avgRating}</span> ratings)</p>
                    </div>
  
                    <div className='d-flex align-items-center gap-5'>
                    <span className='product__price'>${price}</span>
                    <span>Category :  {category.toUpperCase()}</span>
                    </div>
                    <p className='mt-3'>{shortDesc}</p>
  
                    <motion.button whileTap={{scale: 1.2}} className="buy__btn">Add to Cart</motion.button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          <section>
            <Container>
              <Row>
                <Col lg='12'>
                    <div className="tab__wrapper d-flex align-items-center gap-5">
                        <h6 className={`${tab ==='desc' ? 'active__tab' : ''}`} onClick={()=> setTab('desc')}>Description</h6>
                        <h6 className={`${tab ==='rev' ? 'active__tab' : ''}`} onClick={()=> setTab('rev')}>Reviews</h6>
                    </div>

                    {
                      tab === 'desc' ? (<div className='tab__content mt-5'>
                        <p>{description}</p>
                      </div>
                        ):( 
                       <div className='product__review mt-5'>
                        <div className="review__wrapper">
                        <ul>
                          {
                            reviews?.map((item,index)=>(
                              <li kew={index} className='mb-4'>
                                <h6>John Doe</h6>
                                <span>{item.rating} (rating)</span>
                                <p>{item.text}</p>
                              </li>
                            ))
                          }
                        </ul>

                        <div className="review__form">
                          <h4>Leave your experience</h4>
                            <form action="">
                              <div className="form__group">
                                <input type="text" placeholder='Enter name'/>
                              </div>


                              <div className="form__group d-flex align-items-center gap-5 rating__group">
                                <motion.span whileTap={{scale: 1.4}} >1<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale: 1.4}} >2<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale: 1.4}} >3<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale: 1.4}} >4<i class="ri-star-s-fill"></i></motion.span>
                                <motion.span whileTap={{scale: 1.4}} >5<i class="ri-star-s-fill"></i></motion.span>
                              </div>


                              <div className="form__group">
                                <textarea rows={4} type="text" placeholder='Review Message...'/>
                              </div>


                              <motion.button type='submit' className='buy__btn'>Submit</motion.button>
                            </form>
                        </div>


                        </div>
                       </div>
                    )}
                </Col>
              </Row>
            </Container>
          </section>
      </Helmet>
  )
}

export default ProductDetails