import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function NotificationsList({ navigation }) {
  return (
      <View style={styles.container}>
        <Button
      title="Go to Voice Assistant"
      onPress={() => navigation.navigate('Voice Assistant')}
          />
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
                <View style={styles.group10}>
                  <Text style={styles.motionDetected}>Motion Detected</Text>
                  <Text style={styles.loremIpsum1}>
                    2 people detected by motion sensor
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.group14}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon1}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss1}>Slide to Dismiss</Text>
              <Text style={styles.mar1}>Mar/04/2032</Text>
            </View>
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
                <View style={styles.group9}>
                  <Text style={styles.recordingSaved}>Recording Saved</Text>
                  <Text style={styles.duration11H34M44S}>
                    Duration 11h 34m 44s
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.group15}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss2}>Slide to Dismiss</Text>
              <Text style={styles.mar2}>Mar/04/2032</Text>
            </View>
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
                <View style={styles.group8}>
                  <Text style={styles.turnedOff}>Turned Off</Text>
                  <Text style={styles.loremIpsum3}>
                    Camera turned off by Calvin
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.group16}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon3}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss3}>Slide to Dismiss</Text>
              <Text style={styles.mar3}>Mar/04/2032</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.loremIpsum4}>Front Eufi Smart Camera</Text>
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
                <View style={styles.group11}>
                  <Text style={styles.doorUnlocked}>Door Unlocked</Text>
                  <Text style={styles.text}>Remotely unlocked by Calvin</Text>
                </View>
              </View>
            </View>
            <View style={styles.group17}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss4}>Slide to Dismiss</Text>
              <Text style={styles.mar042032}>Mar/04/2032</Text>
            </View>
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
                <View style={styles.group12}>
                  <Text style={styles.doorLocked}>Door Locked</Text>
                  <Text style={styles.text2}>Physically locked by Garry</Text>
                </View>
              </View>
            </View>
            <View style={styles.group18}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon5}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss5}>Slide to Dismiss</Text>
              <Text style={styles.mar0420322}>Mar/04/2032</Text>
            </View>
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
                <View style={styles.group13}>
                  <Text style={styles.doorUnlocked3}>Door Unlocked</Text>
                  <Text style={styles.text3}>Remotely unlocked by Garry</Text>
                </View>
              </View>
            </View>
            <View style={styles.group19}>
              <FontAwesomeIcon
                name="angle-right"
                style={styles.icon6}
              ></FontAwesomeIcon>
              <Text style={styles.slideToDismiss6}>Slide to Dismiss</Text>
              <Text style={styles.mar0420323}>Mar/04/2032</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.frontDoorLock}>Front Door Lock</Text>
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
    marginTop: 49,
    marginLeft: 11
  },
  group: {
    width: 339,
    height: 84,
    marginBottom: 6,
    backgroundColor: "rgba(230, 230, 230,1)"
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
    left: 0,
    flexDirection: "row"
  },
  image1: {
    width: 43,
    height: 49
  },
  group10: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  motionDetected: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 130
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image1Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group14: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon1: {
    color: "rgba(62,103,151,1)",
    fontSize: 40
  },
  slideToDismiss1: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)"
  },
  mar1: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
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
    left: 0,
    flexDirection: "row"
  },
  image2: {
    width: 43,
    height: 49
  },
  group9: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  recordingSaved: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 144
  },
  duration11H34M44S: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image2Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group15: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon2: {
    color: "rgba(62,103,151,1)",
    fontSize: 40,
    width: 14
  },
  slideToDismiss2: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    width: 100
  },
  mar2: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
  },
  rect2Stack: {
    width: 339,
    height: 84
  },
  group2: {
    width: 339,
    height: 84,
    marginBottom: 6,
    backgroundColor: "#fff"
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
    left: 0,
    flexDirection: "row"
  },
  image3: {
    width: 43,
    height: 49
  },
  group8: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  turnedOff: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 120
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image3Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group16: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon3: {
    color: "rgba(62,103,151,1)",
    fontSize: 40,
    width: 14
  },
  slideToDismiss3: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    width: 100
  },
  mar3: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
  },
  rect3Stack: {
    width: 339,
    height: 84
  },
  loremIpsum4: {
    fontFamily: "roboto-900",
    color: "rgba(43,71,104,1)",
    fontSize: 18,
    marginTop: -294,
    marginLeft: 80
  },
  group6: {
    justifyContent: "center",
    marginTop: 333,
    marginLeft: 11
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
    left: 0,
    flexDirection: "row"
  },
  image4: {
    width: 43,
    height: 49
  },
  group11: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  doorUnlocked: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 120
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image4Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group17: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon4: {
    color: "rgba(62,103,151,1)",
    fontSize: 40,
    width: 14
  },
  slideToDismiss4: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    width: 100
  },
  mar042032: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
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
    left: 0,
    flexDirection: "row"
  },
  image5: {
    width: 43,
    height: 49
  },
  group12: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  doorLocked: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 120
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image5Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group18: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon5: {
    color: "rgba(62,103,151,1)",
    fontSize: 40,
    width: 14
  },
  slideToDismiss5: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    width: 100
  },
  mar0420322: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
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
    left: 0,
    flexDirection: "row"
  },
  image6: {
    width: 43,
    height: 49
  },
  group13: {
    width: 168,
    height: 60,
    marginLeft: 6
  },
  doorUnlocked3: {
    fontFamily: "roboto-700",
    color: "rgba(62,103,151,1)",
    width: 120
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "rgba(66,95,129,1)",
    textAlign: "left",
    width: 168,
    height: 43
  },
  image6Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 12,
    marginTop: 17
  },
  group19: {
    top: 0,
    left: 234,
    width: 100,
    height: 73,
    position: "absolute",
    alignItems: "flex-end"
  },
  icon6: {
    color: "rgba(62,103,151,1)",
    fontSize: 40,
    width: 14
  },
  slideToDismiss6: {
    fontFamily: "roboto-regular",
    color: "rgba(62,103,151,1)",
    width: 100
  },
  mar0420323: {
    fontFamily: "roboto-300",
    color: "rgba(37,75,120,1)"
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
    marginLeft: 116
  }
});

export default NotificationsList;
