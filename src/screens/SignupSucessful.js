import React, { Component } from "react";
import styled, { css } from "styled-components";

function SignupSucessful(props) {
  return (
    <>
      <Image src={require("../assets/images/images.png")}></Image>
      <Text>Your Sign up was successful</Text>
      <ContinueToHome>Continue to Home</ContinueToHome>
    </>
  );
}

const Image = styled.img`
  width: 164px;
  height: 153px;
  margin-top: 198px;
  margin-left: 98px;
  object-fit: contain;
`;

const Text = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  font-size: 16px;
  margin-top: 58px;
  margin-left: 71px;
`;

const ContinueToHome = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: rgba(44,87,132,1);
  font-size: 20px;
  text-decoration-line: underline;
  margin-top: 54px;
  margin-left: 94px;
`;

export default SignupSucessful;
