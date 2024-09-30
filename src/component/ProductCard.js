import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({item, authenticate}) => {
  const navigate = useNavigate();

  const goToDetail =()=> {
    if(authenticate){
      navigate(`/product/${item.id}`)
    } else{
      navigate('/login')
    }
  }

  return (
    <div className='card' onClick={goToDetail}>
        <img src={item?.img}/>
        <div>{item.choice? "Conscious Choice":''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new===true? "신제품":''}</div>
    </div>
  )
}

export default ProductCard
