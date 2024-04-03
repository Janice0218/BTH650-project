import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function ListNotifications(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.group}>
          <View style={styles.rect1Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect1}>
              <View style={styles.image1Row}>
                <Image
                  source={require("../assets/images/camera.jpg")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>
                <View style={styles.motionDetectedRowColumn}>
                  <View style={styles.motionDetectedRow}>
                    <Text style={styles.motionDetected}>Motion Detected</Text>
                    <Text style={styles.slideToDismiss1}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.loremIpsum1Row}>
                    <Text style={styles.loremIpsum1}>
                      2 people detected by motion sensor
                    </Text>
                    <Text style={styles.mar1}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon1}
            ></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.group1}>
          <View style={styles.rect2Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect2}>
              <View style={styles.image2Row}>
                <Image
                  source={require("../assets/images/camera.jpg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <View style={styles.recordingSavedRowColumn}>
                  <View style={styles.recordingSavedRow}>
                    <Text style={styles.recordingSaved}>Recording Saved</Text>
                    <Text style={styles.slideToDismiss2}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.duration11H34M44SRow}>
                    <Text style={styles.duration11H34M44S}>
                      Duration 11h 34m 44s
                    </Text>
                    <Text style={styles.mar2}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon2}
            ></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.rect3Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect3}>
              <View style={styles.image3Row}>
                <Image
                  source={require("../assets/images/camera.jpg")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <View style={styles.turnedOffRowColumn}>
                  <View style={styles.turnedOffRow}>
                    <Text style={styles.turnedOff}>Turned Off</Text>
                    <Text style={styles.slideToDismiss3}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.loremIpsum3Row}>
                    <Text style={styles.loremIpsum3}>
                      Camera turned off by Calvin
                    </Text>
                    <Text style={styles.mar3}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon3}
            ></FontAwesomeIcon>
          </View>
        </View>
      </View>
      <View style={styles.group6}>
        <View style={styles.group3}>
          <View style={styles.rect4Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect4}>
              <View style={styles.image4Row}>
                <Image
                  source={require("../assets/images/door.jpg")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <View style={styles.doorUnlockedRowColumn}>
                  <View style={styles.doorUnlockedRow}>
                    <Text style={styles.doorUnlocked}>Door Unlocked</Text>
                    <Text style={styles.slideToDismiss4}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.textRow}>
                    <Text style={styles.text}>Remotely unlocked by Calvin</Text>
                    <Text style={styles.mar042032}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon4}
            ></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect5Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect5}>
              <View style={styles.image5Row}>
                <Image
                  source={require("../assets/images/door.jpg")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
                <View style={styles.doorLockedRowColumn}>
                  <View style={styles.doorLockedRow}>
                    <Text style={styles.doorLocked}>Door Locked</Text>
                    <Text style={styles.slideToDismiss5}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.text2Row}>
                    <Text style={styles.text2}>Physically locked by Garry</Text>
                    <Text style={styles.mar0420322}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon5}
            ></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.group5}>
          <View style={styles.rect6Stack}>
            <View gradientImage="Gradient_dHIgqzR.png" style={styles.rect6}>
              <View style={styles.image6Row}>
                <Image
                  source={require("../assets/images/door.jpg")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
                <View style={styles.doorUnlocked2RowColumn}>
                  <View style={styles.doorUnlocked2Row}>
                    <Text style={styles.doorUnlocked2}>Door Unlocked</Text>
                    <Text style={styles.slideToDismiss6}>Slide to Dismiss</Text>
                  </View>
                  <View style={styles.text3Row}>
                    <Text style={styles.text3}>Remotely unlocked by Garry</Text>
                    <Text style={styles.mar0420323}>Mar/04/2032</Text>
                  </View>
                </View>
              </View>
            </View>
            <FontAwesomeIcon
              name="angle-right"
              style={styles.icon6}
            ></FontAwesomeIcon>
          </View>
        </View>
      </View>
      <Text style={styles.frontDoorLock}>Front Door Lock</Text>
      <Text style={styles.loremIpsum4}>Front Eufi Smart Camera</Text>
      <View style={styles.rect7}></View>
      <Text style={styles.notifications}>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group7: {
    width: 339,
    height: 264,
    alignItems: "center",
    marginTop: 171,
    alignSelf: "center"
  },
  group: {
    width: 339,
    height: 84,
    marginBottom: 6
  },
  rect1: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image1: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  motionDetected: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss1: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 30
  },
  motionDetectedRow: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar1: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  loremIpsum1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  motionDetectedRowColumn: {
    width: 266,
    marginLeft: 6
  },
  image1Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon1: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect1Stack: {
    width: 339,
    height: 84
  },
  group1: {
    width: 339,
    height: 84,
    marginBottom: 6
  },
  rect2: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image2: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  recordingSaved: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss2: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 28
  },
  recordingSavedRow: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  duration11H34M44S: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar2: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  duration11H34M44SRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  recordingSavedRowColumn: {
    width: 266,
    marginLeft: 6
  },
  image2Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon2: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect2Stack: {
    width: 339,
    height: 84
  },
  group2: {
    width: 339,
    height: 84,
    marginBottom: 6
  },
  rect3: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image3: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  turnedOff: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss3: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 66
  },
  turnedOffRow: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar3: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  loremIpsum3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  turnedOffRowColumn: {
    width: 266,
    marginLeft: 6
  },
  image3Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon3: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect3Stack: {
    width: 339,
    height: 84
  },
  group6: {
    justifyContent: "center",
    marginTop: 56,
    alignSelf: "center"
  },
  group3: {
    width: 339,
    height: 84,
    margin: 0,
    marginBottom: 6
  },
  rect4: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image4: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  doorUnlocked: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss4: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 42
  },
  doorUnlockedRow: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar042032: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  textRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  doorUnlockedRowColumn: {
    width: 266,
    marginLeft: 6
  },
  image4Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon4: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect4Stack: {
    width: 339,
    height: 84
  },
  group4: {
    width: 339,
    height: 84,
    margin: 0,
    marginBottom: 6
  },
  rect5: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image5: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  doorLocked: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss5: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 55
  },
  doorLockedRow: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar0420322: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  text2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  doorLockedRowColumn: {
    width: 266,
    marginLeft: 6
  },
  image5Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon5: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect5Stack: {
    width: 339,
    height: 84
  },
  group5: {
    width: 339,
    height: 84,
    margin: 0,
    marginBottom: 6
  },
  rect6: {
    top: 2,
    width: 339,
    height: 82,
    position: "absolute",
    backgroundColor: "rgba(248,251,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    left: 0
  },
  image6: {
    width: 43,
    height: 49,
    marginTop: 5
  },
  doorUnlocked2: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    marginTop: 5
  },
  slideToDismiss6: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    marginLeft: 42
  },
  doorUnlocked2Row: {
    height: 21,
    flexDirection: "row",
    marginRight: 32
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  mar0420323: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)",
    marginLeft: 16,
    marginTop: 21
  },
  text3Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 1
  },
  doorUnlocked2RowColumn: {
    width: 266,
    marginLeft: 6
  },
  image6Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  icon6: {
    top: 0,
    left: 302,
    position: "absolute",
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  rect6Stack: {
    width: 339,
    height: 84
  },
  frontDoorLock: {
    fontFamily: "roboto-900",
    color: "rgba(43,71,104,1)",
    fontSize: 18,
    marginTop: -303,
    alignSelf: "center"
  },
  loremIpsum4: {
    fontFamily: "roboto-900",
    color: "rgba(43,71,104,1)",
    fontSize: 18,
    marginTop: -340,
    alignSelf: "center"
  },
  rect7: {
    width: 500,
    height: 7,
    backgroundColor: "rgba(123,123,123,1)",
    marginTop: -49,
    marginLeft: -62
  },
  notifications: {
    fontFamily: "roboto-700",
    color: "rgba(72,72,72,1)",
    fontSize: 28,
    marginTop: -50,
    marginLeft: 11
  }
});

export default ListNotifications;
