import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { productAction } from '../redux/actions/productAction';

const ProductAll = ({authenticate, addToCart}) => {
  const productList = useSelector((state)=>state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts= async()=>{
    let searchQuery = query.get('q')||''  //q라는 것의 아이템을 가져와서 searchQuery에 넣기
    console.log(searchQuery);
    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(()=>{
    getProducts()
  }, [query]) //query 값이 바뀔 때마다 uesEffect 실행


  return (
    <div>
    <Container/>
    <Row  className='container'>
    {productList.map((menu)=>(
      <Col className='item-card' lg={3}><ProductCard addToCart={addToCart} authenticate={authenticate} item={menu}/></Col>
    ))}
    </Row>
    
    </div>
  )
}

export default ProductAll
