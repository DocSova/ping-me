import React from "react";
import styled from "styled-components";

function LoginButton(props) {
  return (
    <Container {...props}>
      <Button onClick={props.action}>
        Войти 
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  background-color: rgba(255,255,255,1);
  border-radius: 26px;
  font-family: Proxima Nova Rg; 
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: rgba(0,0,0,1);
  text-align: center;
  align-items:center;
  justify-content:center;
  border-style: none;
  padding: 1px;
  flex: 1 1 0%;
  flex-direction: column;
`;

export default LoginButton;
