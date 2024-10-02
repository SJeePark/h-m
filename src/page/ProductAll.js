import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = ({authenticate, addToCart}) => {
  const [productList, setProductList ] =useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts= async()=>{
    let searchQuery = query.get('q')||''  //q라는 것의 아이템을 가져와서 searchQuery에 넣기
    console.log(searchQuery);
    let url =`https://my-json-server.typicode.com/SJeePark/h-m/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
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
