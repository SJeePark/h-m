import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = ({authenticate}) => {
  const [productList, setProductList ] =useState([]);

  const getProducts= async()=>{
    let url =` https://my-json-server.typicode.com/SJeePark/h-m/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  }, [])


  return (
    <div>
    <Container />
    <Row>
    {productList.map((menu)=>(
      <Col lg={3}><ProductCard authenticate={authenticate} item={menu}/></Col>
    ))}
    </Row>
    
    </div>
  )
}

export default ProductAll
