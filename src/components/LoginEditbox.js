import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from '../context';

function LoginEditbox(props) {
  const UserContextEmail = useContext(UserContext)[0];
  const UserContextPassword = useContext(UserContext)[1];
  const {userEmail, updateUserEmail} = UserContextEmail;
  const {userPassword, updateUserPassword} = UserContextPassword;

  const onChangeText = (event) => {
    let cellValue = event.target.value;
    (props.type === "password") ? updateUserPassword(cellValue) : updateUserEmail(cellValue);
  };
  return (
    <Container {...props}>
      <Rect>
        <TextInput 
        placeholder={props.text}
        onChange={onChangeText}
        ></TextInput>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  background-color: #535252;
  border-width: 1px;
  border-color: rgba(166,166,166,1);
  border-radius: 26px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  border-style: solid;
`;

const TextInput = styled.input`
  font-family: Proxima Nova Rg;
  font-style: normal;
  font-weight: 400;
  color: #b5b5b5;
  letter-spacing: 0px;
  font-size: 15px;
  text-align: left;
  flex: 1 1 0%;
  margin-left: 23px;
  margin-right: 24px;
  border-style: none;
  padding: 0px;
  background: transparent;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 0px  0px rgba(0,0,0,1) ;
`;

export default LoginEditbox;
