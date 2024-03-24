import React from 'react';
import '../styles/home.css'

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Home = () => {

  const year = new Date().getFullYear()



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
  </Helmet>
}

export default Home;