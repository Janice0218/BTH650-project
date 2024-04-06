import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Login(props) {
  return (
    <Container>
      <WelcomeBack>Welcome back!</WelcomeBack>
      <Text>Log In to your account</Text>
      <Rect>
        <EnterYourName>Enter your name</EnterYourName>
      </Rect>
      <Rect1>
        <EnterYourPassword>Enter your password</EnterYourPassword>
      </Rect1>
      <RememberMeRow>
        <RememberMe>Remember Me</RememberMe>
        <ForgottenPassword>Forgotten password?</ForgottenPassword>
      </RememberMeRow>
      <Rect2>
        <Text2>Log In</Text2>
      </Rect2>
      <Rect3>
        <IconRow>
          <FontAwesomeIcon
            name="google-plus-official"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 40,
              height: 40,
              width: 34
            }}
          ></FontAwesomeIcon>
          <Text2>Log in with your Google account</Text2>
        </IconRow>
      </Rect3>
      <Text3>Dont’t have an account? Sign Up</Text3>
      <Or3>OR</Or3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(174,213,249,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const WelcomeBack = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  width: 176px;
  height: 33px;
  font-size: 24px;
  text-align: center;
  margin-top: 73px;
  align-self: center;
`;

const Text = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 26px;
  width: 198px;
  font-size: 18px;
  margin-top: 42px;
  margin-left: 35px;
`;

const Rect = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 36px;
  margin-left: 35px;
`;

const EnterYourName = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  text-align: right;
  margin-top: 19px;
  margin-left: 5px;
`;

const Rect1 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 36px;
  margin-left: 35px;
`;

const EnterYourPassword = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  width: 156px;
  height: 20px;
  text-align: right;
  margin-top: 18px;
  margin-left: 11px;
`;

const RememberMe = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 12px;
`;

const ForgottenPassword = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 12px;
  margin-left: 87px;
`;

const RememberMeRow = styled.div`
  height: 15px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
  margin-left: 35px;
  margin-right: 36px;
`;

const Rect2 = styled.div`
  width: 196px;
  height: 55px;
  background-color: rgba(44,87,132,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 56px;
  margin-left: 76px;
`;

const Text2 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 216px;
  height: 17px;
  margin-left: 11px;
  margin-top: 11px;
`;

const Rect3 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  margin-top: 69px;
  margin-left: 35px;
`;

const IconRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 18px;
  margin-left: 11px;
  margin-top: 8px;
`;

const Text3 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: rgba(0,0,0,1);
  font-size: 13px;
  text-align: center;
  margin-top: 28px;
  margin-left: 80px;
`;

const Or3 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -143px;
  margin-left: 165px;
`;

export default Login;
