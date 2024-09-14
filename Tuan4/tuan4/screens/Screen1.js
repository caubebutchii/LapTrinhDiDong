import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";
import { useState } from "react";

export default function Screen1({ navigation }) {
  const [length, setPassLength] = useState(0);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialSymbol, setSpecialSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const handlePress = () => {
    // random password generator
    let result = "";
    let characters = "";
    let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialSymbols = "!@#$%^&*()_+";
    if (lowerCase) {
      characters += lowerCaseLetters;
    }
    if (upperCase) {
      characters += upperCaseLetters;
    }
    if (number) {
      characters += numbers;
    }
    if (specialSymbol) {
      characters += specialSymbols;
    }
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(result);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 322,
          height: 605,
          // top: 19,
          // left: 19,
          // justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "#23235B",
        }}
      >
        <View
          style={{
            width: 181,
            height: 64,
            top: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              fontWeight: 700,
              lineHeight: 29.3,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>
        <View
          style={{
            width: 297,
            height: 55,
            backgroundColor: "#151537",
            top: 78,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "700",
              fontFamily: "Roboto",
              lineHeight: 23.44,
              textAlign: "center",
            }}
          >
            {password}
          </Text>
        </View>

        <View
          style={{
            top: 111,
          }}
        >
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Password length</Text>
            <TextInput
              style={{
                width: 118,
                height: 33,
                backgroundColor: "#FFFFFF",
                fontSize: 20,
                fontWeight: "700",
                fontFamily: "Roboto",
                lineHeight: 23.44,
                textAlign: "right",
              }}
              onChangeText={(text) => setPassLength(text)}
              keyboardType="numeric"
              value={length}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>Include lower case letters</Text>
            <CheckBox
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#FFFFFF",
              }}
              onClick={() => setLowerCase(!lowerCase)}
              isChecked={lowerCase}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>Include upcase letters</Text>
            <CheckBox
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#FFFFFF",
              }}
              onClick={() => setUpperCase(!upperCase)}
              isChecked={upperCase}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>Include number</Text>
            <CheckBox
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#FFFFFF",
              }}
              onClick={() => setNumber(!number)}
              isChecked={number}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.inputText}>Include special symbol</Text>
            <CheckBox
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#FFFFFF",
              }}
              onClick={() => setSpecialSymbol(!specialSymbol)}
              isChecked={specialSymbol}
            />
          </View>
        </View>

        <View
          style={{
            width: 269,
            height: 55,
            backgroundColor: "#3B3B98",
            justifyContent: "center",
            alignItems: "center",
            top: 155,
          }}
        >
          <TouchableOpacity style={{}} onPress={handlePress}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "700",
                fontFamily: "Roboto",
                lineHeight: 21.09,
              }}
            >
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    width: 360,
    height: 640,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3B3B98",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
    lineHeight: 23.44,
    left: 4,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 290,
    marginTop: 22,
  },
});
