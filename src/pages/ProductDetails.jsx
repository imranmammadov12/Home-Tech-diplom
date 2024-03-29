import React, {useState, useRef, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {motion} from 'framer-motion';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import '../styles/product-details.css';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { favoriteActions } from '../redux/slices/favoriteSlice';

const ProductDetails = () => {

  const favoriteItems = useSelector(state => state.favorite.favoriteItems);

  const [selectedRating, setSelectedRating] = useState(null);

  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  const [tab,setTab] = useState('desc');
  const [rating,setRating] = useState(null);

  const {id} = useParams()
  const product = products.find(item => item.id === id);
  
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc , category} = product;


  const relatedProducts = products.filter(item => item.category === category);


  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);


  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();


  const submitHandle = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }

    const existingComments = JSON.parse(localStorage.getItem('comments')) || {};
    const productComments = existingComments[id] || [];
    const updatedComments = {
      ...existingComments,
      [id]: [...productComments, reviewObj]
    };

    localStorage.setItem('comments', JSON.stringify(updatedComments));

    setComments(updatedComments[id]);
    toast.success('Review submited succesfully!')

    setSelectedRating(null);
  };

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    setComments(savedComments[id] || []);
  }, [id])


  const addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));
    toast.success('Product added succesfully!')
  };


  const addToFavorite = () => {
    const isAlreadyAdded = favoriteItems.some((favoriteItem) => favoriteItem.id === product.id); 
    if (!isAlreadyAdded) {
        const newFavoriteItem = {
            id: product.id,
            productName: product.productName,
            price: product.price,
            imgUrl: product.imgUrl,
        };
        dispatch(favoriteActions.addItem(newFavoriteItem));
        toast.success('Product added successfully');
    } else {
        toast.error('Product already added to favorites');
    }
}



  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);


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
                    <div className="buttons__container">
                    <motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
                    <motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToFavorite}>Add to Favorites</motion.button>
                    </div>
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


                        <ul>
                        {comments.map((comment, index) => (
                        <li key={index} className='mb-4'>
                        <h6>{comment.userName}</h6>
                        <span>{comment.rating} (rating)</span>
                        <p>{comment.text}</p>
                        </li>
                        ))}
                        </ul>

                        <div className="review__form">
                          <h4>Leave your experience</h4>
                            <form action="" onSubmit={submitHandle}>
                              <div className="form__group">
                                <input type="text" placeholder='Enter name' ref={reviewUser} required/>
                              </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                                     {[1, 2, 3, 4, 5].map((value) => (
                                      <motion.span
                                        key={value}
                                        whileTap={{ scale: 1.4 }}
                                        onClick={() => handleSelectRating(value)}
                                        style={{ fontSize: selectedRating === value ? '1.4rem' : '1rem'}} 
                                      >
                                        {value}<i className="ri-star-s-fill"></i>
                                      </motion.span>
                                  ))}
                        </div>
                              <div className="form__group">
                                <textarea ref={reviewMsg} rows={4} type="text" placeholder='Review Message...' required />
                              </div>


                              <motion.button type='submit' className='buy__btn'>Submit</motion.button>
                            </form>
                        </div>


                        </div>
                       </div>
                    )}
                </Col>



                <Col lg='12' className='mt-5'>
                <h2 className="related__title">You might also like</h2>
              </Col>
              <ProductsList data = {relatedProducts}/>
              </Row>
            </Container>
          </section>
      </Helmet>
  )
}

export default ProductDetails