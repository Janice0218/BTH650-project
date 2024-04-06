import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Signup(props) {
  return (
    <Container>
      <Rect2>
        <SignUp2>Sign Up</SignUp2>
      </Rect2>
      <EnterYourPassword1Stack>
        <EnterYourPassword1>Enter your password</EnterYourPassword1>
        <Rect3>
          <LastNameStack>
            <LastName></LastName>
            <LastName2>Last name</LastName2>
          </LastNameStack>
        </Rect3>
      </EnterYourPassword1Stack>
      <Rect4>
        <EnterYourName4>Enter your name</EnterYourName4>
      </Rect4>
      <Text>Sign up</Text>
      <Welcome2>Welcome!</Welcome2>
      <Rect5>
        <EmailPhoneNumber>Email/phone number</EmailPhoneNumber>
      </Rect5>
      <Rect6>
        <Password>Password</Password>
      </Rect6>
      <Rect7>
        <ConfirmPassword>Confirm password</ConfirmPassword>
      </Rect7>
      <IconRow>
        <FontAwesomeIcon
          name="check-square-o"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 40
          }}
        ></FontAwesomeIcon>
        <Text>
          By clicking on ‘sign up’, you’re agreeing to the {"\n"}Chunky app
          Terms of Service and Privacy Policy
        </Text>
      </IconRow>
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

const Rect2 = styled.div`
  width: 198px;
  height: 55px;
  background-color: rgba(44,87,132,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 646px;
  align-self: center;
`;

const SignUp2 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 20px;
  text-align: center;
  margin-top: 13px;
  margin-left: 61px;
`;

const EnterYourPassword1 = styled.span`
  font-family: Inter;
  top: 28px;
  left: 11px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  width: 156px;
  height: 20px;
  text-align: right;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 290px;
  height: 55px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`;

const LastName = styled.span`
  font-family: Inter;
  top: 10px;
  left: 5px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  text-align: left;
`;

const LastName2 = styled.span`
  font-family: Inter;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  text-align: right;
`;

const LastNameStack = styled.div`
  width: 135px;
  height: 20px;
  margin-top: 18px;
  position: relative;
`;

const EnterYourPassword1Stack = styled.div`
  width: 290px;
  height: 55px;
  margin-top: -449px;
  margin-left: 35px;
  position: relative;
`;

const Rect4 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: -135px;
  margin-left: 35px;
`;

const EnterYourName4 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  text-align: right;
  margin-top: 18px;
`;

const Text = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 10px;
  margin-left: 9px;
  margin-top: 8px;
`;

const Welcome2 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  width: 117px;
  height: 33px;
  font-size: 24px;
  text-align: center;
  margin-top: -86px;
  margin-left: 124px;
`;

const Rect5 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 244px;
  margin-left: 35px;
`;

const EmailPhoneNumber = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 18px;
  margin-left: 11px;
`;

const Rect6 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 28px;
  margin-left: 35px;
`;

const Password = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 18px;
  margin-left: 11px;
`;

const Rect7 = styled.div`
  width: 290px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 25px;
  margin-left: 35px;
`;

const ConfirmPassword = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 18px;
  margin-left: 11px;
`;

const IconRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-left: 35px;
  margin-right: 51px;
`;

export default Signup;
