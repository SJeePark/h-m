import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async()=>{
    let url = `https://my-json-server.typicode.com/SJeePark/h-m/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img} />
        </Col>
        <Col className='detail-info'>
        <h3>{product?.title}</h3>
        <h4>{product?.price}원</h4>
        <Form.Select aria-label="Default select example" className='size-option'>
            <option>Select the Size</option>
            {product?.size && product.size.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </Form.Select>
        <Button variant="dark" type="submit">
          submit
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
