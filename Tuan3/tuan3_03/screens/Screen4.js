import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Screen4({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "00CCF9"]}
      locations={[0, 0.3, 0.85, 1]}
      style={styles.container}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text
          style={{
            width: 154,
            height: 70,
            fontFamily: "Roboto",
            fontSize: 60,
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: 60,
            color: "#000000FF",
            textAlign: "center",
          }}
        >
          CODE
        </Text>
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
            width: 302,
            height: 53,
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: 32,
            color: "#000000FF",
            textAlign: "center",
          }}
        >
          VERIFICATION
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
            width: 220,
            fontFamily: "Roboto",
            letterSpacing: 0,
            lineHeight: 32,
          }}
        >
          Enter ontime password sent on ++849092605798
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          alignSelf: "center",
          marginTop: 34,
        }}
      >
        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>

        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>

        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>

        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>

        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>

        <Image
          source={require("../assets/Rectangle 1.png")}
          style={{
            // marginTop: 62,
            width: 50,
            height: 50,
            padding: 0,
            margin: -3.4,
          }}
        ></Image>
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
          <View style={[{ width: 339, height: 50 }, styles.button]}>
            <Text
              style={{
                color: "#000000FF",
                fontSize: 18,
                fontWeight: "bold",
                height: 32,
                width: 111,
                lineHeight: 32,
                fontFamily: "Roboto",
                letterSpacing: 0,
                textAlign: "center",
              }}
            >
              VERIFY CODE
            </Text>
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
    // backgroundColor: "#00CCF9",
    // width: 360,
    // height: 640,
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
