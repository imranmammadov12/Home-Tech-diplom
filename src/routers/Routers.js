import { Routes, Route, Navigate } from 'react-router-dom';



import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Payment from '../components/Payment/Payment';
import Favorite from '../pages/Favorite';


const Routers = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Navigate to={'home'} />}/>
          <Route path='home' element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='shop/:id' element={<ProductDetails />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='payment' element={<Payment />}/>
          <Route path='favorite' element={<Favorite />} />
     </Routes>
  )
}

export default Routers;