import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from '../context';
import { useNavigate } from 'react-router-dom';

function LoginButton(props) {
  const UserContextEmail = useContext(UserContext)[0];
  const UserContextPassword = useContext(UserContext)[1];
  const {userEmail, updateUserEmail} = UserContextEmail;
  const {userPassword, updateUserPassword} = UserContextPassword;
  const navigate = useNavigate();
  debugger;

  const onLogin = () => {
    //alert(`${userEmail} ${userPassword}`);
    navigate("/Loading");
  }; 

  return (
    <Container {...props}>
      <Button onClick={onLogin}>
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
