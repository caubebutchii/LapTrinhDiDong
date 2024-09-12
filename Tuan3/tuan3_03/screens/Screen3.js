import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Screen3({navigation}) {
  return (
    <LinearGradient style={styles.container} colors={["#CDF3F6", "#0ACDF8"]}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 62,
        }}
      >
        <Image
          source={require("../assets/lock.png")}
          style={{
            // marginTop: 62,
            width: 105,
            height: 117,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            width: 133,
            height: 58,
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: 32,
            color: "#000000FF",
            textAlign: "center",
          }}
        >
          FORGET PASSWORD
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            height: 53,
            width: 302,
            fontFamily: "Roboto",
            letterSpacing: 0,
            lineHeight: 32,
          }}
        >
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View
        style={{
          width: 305,
          height: 45,
          backgroundColor: "#C4C4C4",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={require("../assets/mail.png")}
          style={{
            width: 47.99999237060547,
            height: 44.999996185302734,
            // paddingLeft:
          }}
        />

        <Text
          style={{
            fontSize: 15,
            fontFamily: "Roboto",
            letterSpacing: 0,
            lineHeight: 32,
            width: 48,
            height: 32,
          }}
        >
          Email
        </Text>
      </View>

      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          alignSelf: "center",
          marginTop: 34,
        }}
      >
        <TouchableOpacity style={{}}>
          <View style={[{ width: 305, height: 45 }, styles.button]}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00CCF9",
    width: 360,
    height: 640,
  },
  button: {
    backgroundColor: "#E3C000",
    // borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000000FF",
    fontSize: 20,
    fontWeight: "bold",
    height: 48,
    width: 77,
    lineHeight: 48,
    fontFamily: "Roboto",
    letterSpacing: 0,
    textAlign: "center",
  },
});
