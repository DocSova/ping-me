import { useState } from "react";
import styled from "styled-components";
import LoginEditbox from "../components/LoginEditbox";
import LoginButton from "../components/LoginButton";
import { firebase } from '../firebase_config';
import { Link } from "react-router-dom";

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    alert(`${email} ${password}`);
    //return <Link to="/Loading" />;
  };

  return (
    <Container>
      <Group>
        <ImageStack>
          <Image src={require("../assets/images/logo.png")}></Image>
          <ВходВСистему>Вход в систему</ВходВСистему>
        </ImageStack>
      </Group>
      <Group2>
        <LoginEditbox
          text={"E-mail"}
          action={setEmail}
          style={{
            height: 48,
            width: 384,
            marginTop: 99,
            marginLeft: 208
          }}
        ></LoginEditbox>
        <LoginEditbox
          text={"Пароль"}
          action={setPassword}
          style={{
            height: 48,
            width: 384,
            marginTop: 7,
            marginLeft: 208
          }}
        ></LoginEditbox>
        <LoginButton
          action = {onLogin}
          style={{
            height: 48,
            width: 384,
            marginTop: 50,
            marginLeft: 208
          }}
        ></LoginButton>
      </Group2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(51,51,51,1);
  flex-direction: column;
  height: 600px;
`;

const Group = styled.div`
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  top: 0px;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 72px;
  object-fit: contain;
`;

const ВходВСистему = styled.span`
  font-family: Proxima Nova Rg;
  top: 155px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 51px;
  width: 343px;
  font-size: 20px;
  text-align: center;
`;

const ImageStack = styled.div`
  width: 343px;
  height: 206px;
  margin-left: 228px;
  position: relative;
`;

const Group2 = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 18px;
`;

export default LoginScreen;
