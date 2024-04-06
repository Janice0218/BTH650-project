import React, { Component } from "react";
import styled, { css } from "styled-components";

function Onboarding(props) {
  return (
    <>
      <Image
        src={require("../assets/images/smart-home-concept-tiny-woman-control-of-lighting-heating-ventilation-and-air-conditioning-security-and-video-surveillance-with-smartphone-app-modern-flat-cartoon-style-illustration-vector.jpg")}
      ></Image>
      <ControlYourDevices>Control Your Devices</ControlYourDevices>
      <LoremIpsum>
        Monitor and control smart TVs, light bulbs, {"\n"}appliances, and other
        devices
      </LoremIpsum>
      <Rect>
        <LogIn>Log In</LogIn>
      </Rect>
      <Rect1>
        <SignUp>Sign Up</SignUp>
      </Rect1>
    </>
  );
}

const Image = styled.img`
  width: 462px;
  height: 370px;
  background-color: #fff;
  margin-top: 5px;
  margin-left: -51px;
  object-fit: contain;
`;

const ControlYourDevices = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  height: 30px;
  width: 360px;
  font-size: 24px;
  text-align: center;
  margin-top: 19px;
`;

const LoremIpsum = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 40px;
  width: 360px;
  text-align: center;
  font-size: 12px;
  margin-top: 16px;
`;

const Rect = styled.div`
  width: 289px;
  height: 55px;
  background-color: rgba(44,87,132,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 53px;
  margin-left: 36px;
`;

const LogIn = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: rgba(255,255,255,1);
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
  margin-left: 109px;
`;

const Rect1 = styled.div`
  width: 289px;
  height: 55px;
  background-color: rgba(255,255,255,1);
  border-radius: 5px;
  border-width: 2px;
  border-color: rgba(103,170,249,1);
  flex-direction: column;
  display: flex;
  margin-top: 31px;
  margin-left: 36px;
  border-style: solid;
`;

const SignUp = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: rgba(103,170,249,1);
  font-size: 24px;
  text-align: center;
  margin-top: 13px;
  margin-left: 100px;
`;

export default Onboarding;
