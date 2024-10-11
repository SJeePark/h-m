import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';


const ProductDetail = ({addToCart}) => {
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const getProductDetail = async()=>{
    dispatch(productAction.getProductDetail(id));
  }

  useEffect(()=>{
    getProductDetail(id)
  }, [id])

  //장바구니 담기 기능
  const cartSubmit = () =>{
    if (selectedSize) {
      addToCart({ ...product, selectedSize });  // 선택한 사이즈와 함께 상품을 추가
    } else {
      alert('사이즈를 선택해주세요.');
    }
  }

  return (
    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img} />
        </Col>
        <Col className='detail-info'>
        <h3>{product?.title}</h3>
        <h4>{product?.price}원</h4>
        <Form.Select 
        aria-label="Default select example" 
        className='size-option' 
        onChange={(e) => setSelectedSize(e.target.value)}> {/* Form에 event(사이즈 선택)가 적용되면 setSelectedSize 값 입력 */}
            <option>Select the Size</option>
            {product?.size && product.size.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </Form.Select>
        <Button variant="dark" type="submit" onClick={cartSubmit}>
          장바구니에 담기
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
