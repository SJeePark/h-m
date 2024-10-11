import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Cart from './page/Cart';
import LoginPage from './page/LoginPage';
import ProductAll from './page/ProductAll';
import PrivateRoute from './route/PrivateRoute';

/*
1. 전체 상품페이지, 로그인, 상품 상페 페이지
2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다. 
3. 로그인 버튼을 누르면 로그인 페이지가 나온다
4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
5. 로그인이 되어있을 경우엔 상품 디테일 페이지를 볼 수 있다. 
6. 로그아웃 버튼을 클릭하면 로그아웃이 된다. 
7. 로그아웃되면 상품 디테일 볼 수 없음. 다시 로그인 페이지가 보인다. 
8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
9. 상품을 검색할 수 있다. 
*/

function App() {

  const [cart, setCart] = useState([]);

  // 장바구니에 상품 추가하는 함수
  const addToCart = (product) => {
    setCart([...cart, product]);  // 기존 장바구니에 새 상품 추가
  };


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll addToCart={addToCart}/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/product/:id' element={<PrivateRoute/>}></Route>
        <Route path='/cart' element={<Cart cart={cart}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
