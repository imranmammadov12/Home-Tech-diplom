import React, {useState, useEffect} from 'react';
import '../styles/home.css'

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products'


const Home = () => {

  const year = new Date().getFullYear();


  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  



  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item => item.category 
        === 'chair');

    const filteredBestSalesProducts = products.filter(item => item.category 
        === 'sofa');  
    const filteredMobileProducts = products.filter(item => item.category 
        === 'mobile');
    const filteredWirelessProducts = products.filter(item => item.category 
        === 'wireless');

      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
    }, []);



  return <Helmet title={'Home '} >
      <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
               <p className="hero__subtitle">Trending product in {year}</p>
               <h2>Make Your Interior More Minimalistic & Modern </h2>
               <p>Step into a world of simplicity and sophistication.
                 Discover minimalist designs that redefine modern living.
                  Your home, reimagined.</p>

                <motion.button  whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    <Services />

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5 rounded-pill' style={{ background: '#0a1d37' }}>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList  data={trendingProducts}/>
        </Row>
      </Container>
    </section>


    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center mb-5 rounded-pill' style={{ background: '#0a1d37' }}>
            <h2 className='section__title'>Best Sales</h2>
          </Col>

          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>


    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5 rounded-pill' style={{ background: '#0a1d37' }}>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>

          <ProductsList data={mobileProducts} />
          <ProductsList data ={wirelessProducts} />
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Home;