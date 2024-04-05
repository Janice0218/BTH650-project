import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.dashboardRow}>
          <Text style={styles.dashboard}>Dashboard</Text>
          <Image
            source={require("../assets/images/icon-voice1.png")}
            resizeMode="contain"
            style={styles.voice}
          ></Image>
        </View>
      </View>
      <View style={styles.cardLightOneStackRow}>
        <View style={styles.cardLightOneStack}>
          <ImageBackground
            source={require("../assets/images/gradient-card-light.png")}
            resizeMode="contain"
            style={styles.cardLightOne}
            imageStyle={styles.cardLightOne_imageStyle}
          >
            <Text style={styles.lights}>Lights</Text>
            <Text style={styles.lights2}>4 devices</Text>
          </ImageBackground>
          <Text style={styles.categories}>Categories</Text>
        </View>
        <ImageBackground
          source={require("../assets/images/gradient-card-light.png")}
          resizeMode="contain"
          style={styles.cardLightTwo}
          imageStyle={styles.cardLightTwo_imageStyle}
        >
          <Text style={styles.secutiry}>Secutiry</Text>
          <Text style={styles.text}>3 devices</Text>
        </ImageBackground>
        <View style={styles.arrowTopColumn}>
          <Image
            source={require("../assets/images/arrow-grey.png")}
            resizeMode="contain"
            style={styles.arrowTop}
          ></Image>
          <ImageBackground
            source={require("../assets/images/gradient-card-light.png")}
            resizeMode="contain"
            style={styles.cardLightThree}
            imageStyle={styles.cardLightThree_imageStyle}
          >
            <Text style={styles.cameras}>Cameras</Text>
            <Text style={styles.text2}>3 devices</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.cardDarkOneRow}>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.cardDarkOne}
          imageStyle={styles.cardDarkOne_imageStyle}
        >
          <Text style={styles.livingRoomSpeaker}>Living room speaker</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.cardDarkTwo}
          imageStyle={styles.cardDarkTwo_imageStyle}
        >
          <Text style={styles.frontDoorLock3}>Front Door{"\n"}lock</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/gradient-card-dark_oijt..png")}
          resizeMode="contain"
          style={styles.cardDarkThree}
          imageStyle={styles.cardDarkThree_imageStyle}
        >
          <Text style={styles.backyardCamera}>Backyard{"\n"}camera</Text>
        </ImageBackground>
      </View>
      <View style={styles.notificationsBthStackStack}>
        <View style={styles.notificationsBthStack}>
          <View style={styles.notificationsBth}>
            <Image
              source={require("../assets/images/icon-notifications.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <ImageBackground
            source={require("../assets/images/navbar.png")}
            resizeMode="contain"
            style={styles.navbar}
            imageStyle={styles.navbar_imageStyle}
          >
            <Text style={styles.notifications2}>Notifications</Text>
            <View style={styles.image2Row}>
              <Image
                source={require("../assets/images/icon-settings.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.settings3}>Settings</Text>
            </View>
            <View style={styles.dashbrdRow}>
              <Image
                source={require("../assets/images/icon-dashboard.png")}
                resizeMode="contain"
                style={styles.dashbrd}
              ></Image>
              <Image
                source={require("../assets/images/icon-devices.png")}
                resizeMode="contain"
                style={styles.devices}
              ></Image>
              <Image
                source={require("../assets/images/icon-profile.png")}
                resizeMode="contain"
                style={styles.profile}
              ></Image>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.settingsBtn}></View>
      </View>
      <View style={styles.allDevicesRow}>
        <Text style={styles.allDevices}>All devices</Text>
        <Image
          source={require("../assets/images/arrow-grey.png")}
          resizeMode="contain"
          style={styles.arrowBottom}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 360,
    height: 100,
    backgroundColor: "rgba(103,170,249,1)",
    flexDirection: "row"
  },
  dashboard: {
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
  dashboardRow: {
    height: 43,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 34,
    marginTop: 28
  },
  cardLightOne: {
    top: 27,
    left: 0,
    width: 134,
    height: 134,
    position: "absolute"
  },
  cardLightOne_imageStyle: {},
  lights: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 63,
    height: 20,
    marginTop: 41,
    marginLeft: 43
  },
  lights2: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    fontSize: 14,
    width: 86,
    height: 20,
    marginTop: 13,
    marginLeft: 33
  },
  categories: {
    top: 0,
    left: 6,
    position: "absolute",
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 20,
    width: 121,
    height: 48
  },
  cardLightOneStack: {
    width: 134,
    height: 161,
    marginTop: 2
  },
  cardLightTwo: {
    width: 134,
    height: 134,
    marginLeft: 10,
    marginTop: 29
  },
  cardLightTwo_imageStyle: {},
  secutiry: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 63,
    height: 20,
    marginTop: 41,
    marginLeft: 35
  },
  text: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    fontSize: 14,
    width: 86,
    height: 20,
    marginTop: 13,
    marginLeft: 36
  },
  arrowTop: {
    width: 25,
    height: 25,
    transform: [
      {
        rotate: "180.00deg"
      }
    ]
  },
  cardLightThree: {
    width: 134,
    height: 134,
    marginTop: 4,
    marginLeft: 5
  },
  cardLightThree_imageStyle: {},
  cameras: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 83,
    height: 20,
    marginTop: 41,
    marginLeft: 25
  },
  text2: {
    fontFamily: "inter-regular",
    color: "rgba(44,87,132,1)",
    fontSize: 14,
    width: 86,
    height: 20,
    marginTop: 13,
    marginLeft: 30
  },
  arrowTopColumn: {
    width: 139,
    marginLeft: 6
  },
  cardLightOneStackRow: {
    height: 163,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 28,
    marginRight: -91
  },
  cardDarkOne: {
    height: 134,
    width: 134
  },
  cardDarkOne_imageStyle: {},
  livingRoomSpeaker: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 99,
    height: 55,
    marginTop: 32,
    marginLeft: 20
  },
  cardDarkTwo: {
    height: 134,
    width: 134,
    marginLeft: 10
  },
  cardDarkTwo_imageStyle: {},
  frontDoorLock3: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 99,
    height: 55,
    marginTop: 32,
    marginLeft: 24
  },
  cardDarkThree: {
    height: 134,
    width: 134,
    marginLeft: 11
  },
  cardDarkThree_imageStyle: {},
  backyardCamera: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 16,
    width: 99,
    height: 55,
    marginTop: 32,
    marginLeft: 21
  },
  cardDarkOneRow: {
    height: 134,
    flexDirection: "row",
    marginTop: 65,
    marginLeft: 28,
    marginRight: -91
  },
  notificationsBth: {
    top: 0,
    left: 60,
    width: 239,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(44,87,132,1)",
    borderRadius: 5
  },
  image: {
    width: 29,
    height: 29,
    marginTop: 9,
    marginLeft: 17
  },
  navbar: {
    top: 11,
    left: 0,
    width: 360,
    height: 360,
    position: "absolute"
  },
  navbar_imageStyle: {},
  notifications2: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 24,
    width: 125,
    marginTop: 2,
    marginLeft: 124
  },
  image2: {
    width: 28,
    height: 28
  },
  settings3: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 72,
    height: 24,
    marginLeft: 23,
    marginTop: 4
  },
  image2Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 77,
    marginRight: 160
  },
  dashbrd: {
    width: 46,
    height: 46,
    marginTop: 3
  },
  devices: {
    width: 49,
    height: 49,
    marginLeft: 91
  },
  profile: {
    width: 46,
    height: 46,
    marginLeft: 86,
    marginTop: 3
  },
  dashbrdRow: {
    height: 49,
    flexDirection: "row",
    marginTop: 85,
    marginLeft: 18,
    marginRight: 24
  },
  notificationsBthStack: {
    top: 0,
    left: 0,
    width: 360,
    height: 371,
    position: "absolute"
  },
  settingsBtn: {
    top: 59,
    left: 60,
    width: 239,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(44,87,132,1)",
    borderRadius: 5
  },
  notificationsBthStackStack: {
    width: 360,
    height: 371,
    marginTop: 63
  },
  allDevices: {
    fontFamily: "inter-regular",
    color: "#121212",
    fontSize: 20,
    width: 121,
    height: 32,
    marginTop: 3
  },
  arrowBottom: {
    width: 25,
    height: 25,
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    marginLeft: 157
  },
  allDevicesRow: {
    height: 35,
    flexDirection: "row",
    marginTop: -603,
    marginLeft: 34,
    marginRight: 23
  }
});

export default Untitled;
