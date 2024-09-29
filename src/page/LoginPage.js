import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
  const navigate =useNavigate()
  const loginUser = (event)=>{
    console.log('login user function issue')
    event.preventDefault(); //새로고침을 막아주는 함수
    setAuthenticate(true);
    navigate('/');
}

  return (
    <Container>
      <Form onSubmit={(event)=> loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        LOGIN
      </Button>
    </Form>
    </Container>
  )
}

//Form에서의 button의 type이 submit이면 Refresh가 된다. 그리고 onSubmit 이벤트를 사용해야 정보가 제출된다.
//form은  Refresh가 된다. 그래서 제풀 버튼을 실행하면 리프레쉬 되는 것을 막아줘야 됨
//-> 그래서 onClick 이벤트 선언 불가


export default LoginPage
