import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 360,
          height: 283,
          // alignItems: 'center',
        }}
      >
        <View
          style={{
            top: 0,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/book.png")}
            style={{
              width: 104,
              height: 127,
              top: 13,
              left: 13,
            }}
          />

          <View
            style={{
              top: 13,
              left: 25,
            }}
          >
            <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 12,
              lineHeight: 14.06,
            }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text
            style={{
              top: 15,
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 12,
              lineHeight: 14.06,
            }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{
              top: 20,
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 21.09,
              color: "#EE0D0D"
            }}>141.800 đ</Text>
            <Text style={{
              top: 26,
              fontFamily: "Roboto",
              fontWeight: 700,
              fontSize: 12,
              lineHeight: 14.06,
              textDecorationLine: 'line-through',
              color: '#808080'
            }}>141.800 đ</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  
                }}
              >
                <TouchableOpacity
                >
                  <Image source={require('../assets/btnminus.png')} />
                  
                </TouchableOpacity>
                <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: 15,
                  lineHeight: 17.58,
                  color: '#000000',
                  width: 18,
                  textAlign: 'center'
                }}>1</Text>
                <TouchableOpacity>
                  <Image source={require('../assets/btnadd.png')} />
                </TouchableOpacity>
              </View>

              <View>
                <Text>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: '#C4C4C4',
    width: 360,
    height: 640,
  },
});
