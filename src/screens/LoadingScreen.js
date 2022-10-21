import React, { Component } from "react";
import styled, { css } from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

function LoadingScreen(props) {
  return (
    <Container>
      <ScaleLoader
        color={"#ffffff"}
        loading={true}
        size={150}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(51,51,51,1);
  flex-direction: column;
  height: 545px;
  align-items:center;
  justify-content:center;
`;

export default LoadingScreen;
