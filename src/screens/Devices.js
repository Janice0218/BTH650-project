import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

function Devices(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.devicesRow}>
          <Text style={styles.devices}>Devices</Text>
          <Image
            source={require("../assets/images/icon-voice1.png")}
            resizeMode="contain"
            style={styles.voice}
          ></Image>
        </View>
      </View>
      <View style={styles.cardDarkTwoRow}>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.cardDarkTwo}
          imageStyle={styles.cardDarkTwo_imageStyle}
        >
          <ImageBackground
            source={require("../assets/images/gradient-card-dark_oijt..png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <Text style={styles.livingRoomSpeaker}>
              Living room {"\n"}speaker
            </Text>
            <Text style={styles.on2}>On</Text>
          </ImageBackground>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.frontDoorLock}>Front Door{"\n"}lock</Text>
          <Text style={styles.locked}>Locked</Text>
        </ImageBackground>
      </View>
      <Text style={styles.allDevices}>All devices</Text>
      <View style={styles.image4Row}>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image4}
          imageStyle={styles.image4_imageStyle}
        >
          <Text style={styles.backyardCamera}>Backyard{"\n"}camera</Text>
          <Text style={styles.on4}>On</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <ImageBackground
            source={require("../assets/images/gradient-card-dark_oijt..png")}
            resizeMode="contain"
            style={styles.image5}
            imageStyle={styles.image5_imageStyle}
          >
            <Text style={styles.livingRoomTv}>Living room{"\n"}TV</Text>
            <Text style={styles.off}>Off</Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={styles.image6StackStack}>
        <View style={styles.image6Stack}>
          <ImageBackground
            source={require("../assets/images/gradient-card-dark_oijt..png")}
            resizeMode="contain"
            style={styles.image6}
            imageStyle={styles.image6_imageStyle}
          >
            <Text style={styles.parkingCamera}>Parking {"\n"}camera</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/navbar.png")}
            resizeMode="contain"
            style={styles.navbar1}
            imageStyle={styles.navbar1_imageStyle}
          >
            <View style={styles.batteryDownRow}>
              <Text style={styles.batteryDown}>Battery down</Text>
              <Text style={styles.off2}>Off</Text>
            </View>
            <View style={styles.airConditionerRow}>
              <Text style={styles.airConditioner}>Air {"\n"}conditioner</Text>
              <Text style={styles.frontDoorbell}>Front {"\n"}Doorbell</Text>
            </View>
            <View style={styles.image13Row}>
              <Image
                source={require("../assets/images/icon-dashboard-inactive.png")}
                resizeMode="contain"
                style={styles.image13}
              ></Image>
              <ImageBackground
                source={require("../assets/images/icon-devices.png")}
                resizeMode="contain"
                style={styles.image11}
                imageStyle={styles.image11_imageStyle}
              >
                <Image
                  source={require("../assets/images/icon-devices-active.png")}
                  resizeMode="contain"
                  style={styles.image12}
                ></Image>
              </ImageBackground>
              <Image
                source={require("../assets/images/icon-profile.png")}
                resizeMode="contain"
                style={styles.profile1}
              ></Image>
            </View>
          </ImageBackground>
        </View>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
          <ImageBackground
            source={require("../assets/images/gradient-card-dark_oijt..png")}
            resizeMode="contain"
            style={styles.image8}
            imageStyle={styles.image8_imageStyle}
          >
            <Text style={styles.bedroomTv}>Bedroom {"\n"}TV</Text>
          </ImageBackground>
        </ImageBackground>
        <Image
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image9}
        ></Image>
        <Image
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.image10}
        ></Image>
      </View>
      <View style={styles.searchADeviceStack}>
        <Text style={styles.searchADevice}>Search a device...</Text>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(103,170,249,1)",
    flexDirection: "row",
    alignSelf: "center"
  },
  devices: {
    fontFamily: "inter-regular",
    color: "rgba(255,255,255,1)",
    width: 153,
    height: 17,
    fontSize: 24,
    marginTop: 8
  },
  voice: {
    width: 43,
    height: 43,
    marginLeft: 112
  },
  devicesRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 34,
    marginTop: 28
  },
  cardDarkTwo: {
    height: 116,
    width: 143
  },
  cardDarkTwo_imageStyle: {},
  image2: {
    height: 116,
    width: 143
  },
  image2_imageStyle: {},
  livingRoomSpeaker: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 22,
    marginLeft: 26
  },
  on2: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 19,
    height: 17,
    marginTop: 12,
    marginLeft: 26
  },
  image: {
    height: 116,
    width: 143,
    marginLeft: 19
  },
  image_imageStyle: {},
  frontDoorLock: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    height: 40,
    width: 81,
    marginTop: 22,
    marginLeft: 29
  },
  locked: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 72,
    height: 17,
    marginTop: 12,
    marginLeft: 29
  },
  cardDarkTwoRow: {
    height: 116,
    flexDirection: "row",
    marginTop: 143,
    marginLeft: 27,
    marginRight: 28
  },
  allDevices: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 20,
    width: 121,
    height: 32,
    marginTop: -156,
    marginLeft: 34
  },
  image4: {
    height: 116,
    width: 143
  },
  image4_imageStyle: {},
  backyardCamera: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 24,
    marginLeft: 26
  },
  on4: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 19,
    height: 17,
    marginTop: 12,
    marginLeft: 26
  },
  image3: {
    height: 116,
    width: 143,
    marginLeft: 19
  },
  image3_imageStyle: {},
  image5: {
    height: 116,
    width: 143
  },
  image5_imageStyle: {},
  livingRoomTv: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 88,
    height: 40,
    marginTop: 24,
    marginLeft: 29
  },
  off: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 44,
    height: 17,
    marginTop: 12,
    marginLeft: 29
  },
  image4Row: {
    height: 116,
    flexDirection: "row",
    marginTop: 141,
    marginLeft: 27,
    marginRight: 28
  },
  image6: {
    position: "absolute",
    top: 0,
    left: 27,
    height: 116,
    width: 143
  },
  image6_imageStyle: {},
  parkingCamera: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 61,
    height: 40,
    marginTop: 23,
    marginLeft: 26
  },
  navbar1: {
    top: 56,
    left: 0,
    width: 360,
    height: 360,
    position: "absolute"
  },
  navbar1_imageStyle: {},
  batteryDown: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 92,
    height: 17
  },
  off2: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    width: 44,
    height: 17,
    marginLeft: 73
  },
  batteryDownRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 53,
    marginRight: 98
  },
  airConditioner: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 102,
    height: 60
  },
  frontDoorbell: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 95,
    height: 40,
    marginLeft: 63
  },
  airConditionerRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 64,
    marginLeft: 53,
    marginRight: 47
  },
  image13: {
    width: 46,
    height: 46,
    marginTop: 3
  },
  image11: {
    width: 49,
    height: 49,
    marginLeft: 91
  },
  image11_imageStyle: {},
  image12: {
    width: 49,
    height: 49
  },
  profile1: {
    width: 46,
    height: 46,
    marginLeft: 86,
    marginTop: 3
  },
  image13Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 24
  },
  image6Stack: {
    top: 0,
    left: 0,
    width: 360,
    height: 416,
    position: "absolute"
  },
  image7: {
    position: "absolute",
    top: 0,
    left: 190,
    height: 116,
    width: 143
  },
  image7_imageStyle: {},
  image8: {
    height: 116,
    width: 143
  },
  image8_imageStyle: {},
  bedroomTv: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 73,
    height: 40,
    marginTop: 23,
    marginLeft: 28
  },
  image9: {
    position: "absolute",
    top: 133,
    left: 27,
    height: 116,
    width: 143
  },
  image10: {
    position: "absolute",
    top: 133,
    left: 187,
    height: 116,
    width: 143
  },
  image6StackStack: {
    width: 360,
    height: 416,
    marginTop: 17
  },
  searchADevice: {
    top: 15,
    left: 17,
    position: "absolute",
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    fontSize: 16,
    height: 20,
    width: 134
  },
  rect2: {
    top: 0,
    left: 0,
    width: 305,
    height: 50,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(163,190,218,1)",
    borderRadius: 5
  },
  searchADeviceStack: {
    width: 305,
    height: 50,
    marginTop: -799,
    marginLeft: 27
  }
});

export default Devices;
