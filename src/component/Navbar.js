import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';


const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Sale', '지속가능성']
    const navigate = useNavigate()

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isPc = useMediaQuery({ query: '(min-width: 768px)' });
    //useMediaQuery: (query와 화면이 일치하는지 여부)에 이벤트를 달아, 화면이 바뀔때마다 감지해 matches값을 반환하는 훅

    const search = (event)=>{
      if(event.key === "Enter"){
        //입력한 검색어를 읽어와서
        let keyword = event.target.value  //input 안에 있는 값 읽어오기
        //url을 바꿔준다. 
        navigate(`/?q=${keyword}`)
      }
    }

    const goToLogin=()=>{
        navigate('/login');
    }

    const goToHome = () => {
      navigate('/');
    }

    const log = () =>{
      if(authenticate) {
        setAuthenticate(false);
      } else {
        goToLogin(); 
      }
    }


  return (
       <div>
        {isMobile && <SideBar/>}
      <div>
        <div className='login-button' onClick={log}>
          <FontAwesomeIcon icon={faUser} className='userIcon'/>
          <div className='log'>{authenticate?"Logout":"Login"}</div>
        </div>
      </div>

      <div className='nav-section'>
        <img
          width={150}
          src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'
          onClick={goToHome}
        />
      </div>
      <div className='menu-area'>
        {isPc && (
          <div className='menu-container'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
        )}
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input onKeyPress={search}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
