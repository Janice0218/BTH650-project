import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Voice(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.rect2}
        imageStyle={styles.rect2_imageStyle}
        source={require("../assets/images/Gradient_TT6r16h.png")}
      >
        <Text style={styles.voiceAssistant}>Voice Assistant</Text>
        <View style={styles.rect1}></View>
        <View style={styles.group2}>
          <Text style={styles.turnOffMySmartTv}>Turn off my smart tv</Text>
          <Text style={styles.lockTheFrontDoor}>Lock the front door</Text>
          <Text style={styles.lockTheFrontDoor2}>
            Show the front door camera feed
          </Text>
          <Text style={styles.text}>Show me the notification screen</Text>
          <Text style={styles.turnOffThe}>Turn off the living room lights</Text>
        </View>
        <View style={styles.group}>
          <Svg viewBox="0 0 31.25 31.25" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={16}
              cy={16}
              rx={16}
              ry={16}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 31.25 31.25" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={16}
              cy={16}
              rx={16}
              ry={16}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 31.25 31.25" style={styles.ellipse3}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={16}
              cy={16}
              rx={16}
              ry={16}
            ></Ellipse>
          </Svg>
        </View>
      </ImageBackground>
      <Text style={styles.tapToSpeak}>Tap to Speak</Text>
      <Image
        source={require("../assets/images/voice.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    width: 736,
    height: 344,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginTop: 57,
    marginLeft: -188
  },
  rect2_imageStyle: {},
  voiceAssistant: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    width: 197,
    height: 33,
    marginTop: 5,
    marginLeft: 270
  },
  rect1: {
    width: 500,
    height: 7,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5,
    marginLeft: 118
  },
  group2: {
    width: 296,
    height: 223,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 7,
    marginLeft: 220
  },
  turnOffMySmartTv: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 183,
    height: 26,
    margin: 8,
    alignSelf: "center"
  },
  lockTheFrontDoor: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 175,
    height: 26,
    margin: 8,
    alignSelf: "center"
  },
  lockTheFrontDoor2: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 296,
    height: 26,
    margin: 8,
    alignSelf: "center"
  },
  text: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 288,
    height: 26,
    margin: 8,
    alignSelf: "center"
  },
  turnOffThe: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 267,
    height: 26,
    margin: 8,
    alignSelf: "center"
  },
  group: {
    flexDirection: "row",
    width: 118,
    height: 31,
    marginTop: 18,
    marginLeft: 309
  },
  ellipse: {
    width: 31,
    height: 31,
    marginRight: 8,
    alignSelf: "center"
  },
  ellipse2: {
    width: 31,
    height: 31,
    marginRight: 8,
    alignSelf: "center"
  },
  ellipse3: {
    width: 31,
    height: 31,
    marginRight: 8,
    alignSelf: "center"
  },
  tapToSpeak: {
    fontFamily: "roboto-700",
    color: "rgba(43,71,104,1)",
    fontSize: 22,
    marginTop: 14,
    marginLeft: 116
  },
  image: {
    width: 240,
    height: 240,
    marginTop: 6,
    marginLeft: 60
  }
});

export default Voice;
