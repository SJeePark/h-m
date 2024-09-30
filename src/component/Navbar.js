import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const [search, setSearch] = useState('');

    const goToLogin=()=>{
        navigate('/login');
    }


  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>Login</div>
        </div>
      </div>
      <div className='nav-section'>
        <img 
        width={'150px'}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s'/>
      </div>
      <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} onClick={() => setSearch(search)}/>
            <input type='text' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>

        </div>
      </div>
    </div>
  )
}

export default Navbar
