  import React, { useState } from "react";
  import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";

  export default function Screen2({ navigation }) {
    const [quantity, setQuantity] = useState(1);
    const price = 141800;
    const totalPrice = price * quantity;

    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            width: 360,
            height: 283,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              top: 0,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("./assets/book.png")}
              style={{
                width: 104,
                height: 127,
                top: 14,
                left: 13,
              }}
            />

            <View
              style={{
                top: 14,
                left: 25,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: 14,
                  lineHeight: 14.06,
                }}
              >
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text
                style={{
                  top: 16,
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: 14,
                  lineHeight: 14.06,
                }}
              >
                Cung cấp bởi Tiki Trading
              </Text>
              <Text
                style={{
                  top: 29,
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: 19,
                  lineHeight: 21.09,
                  color: "#EE0D0D",
                }}
              >
                141.800 đ
              </Text>
              <Text
                style={{
                  top: 40,
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: 14.06,
                  textDecorationLine: "line-through",
                  color: "#808080",
                }}
              >
                141.800 đ
              </Text>
              <View
                style={{
                  top: 57,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity onPress={handleDecrease}>
                    <Image source={require("./assets/btnminus.png")} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: 15,
                      lineHeight: 17.58,
                      color: "#000000",
                      width: 18,
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </Text>
                  <TouchableOpacity onPress={handleIncrease}>
                    <Image source={require("./assets/btnadd.png")} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text
                    style={{
                      color: "#134FEC",
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: 15,
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Mua sau
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              top: 35,
              left: 13,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: 700,
                color: "#000",
              }}
            >
              Mã giảm giá đã lưu
            </Text>
            <Text
              style={{
                left: 11,
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: 700,
                color: "#134FEC",
              }}
            >
              Xem tại đây
            </Text>
          </View>

          <View
            style={{
              top: 30,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  width: 99,
                  height: 45,
                  backgroundColor: "none",
                  top: 40,
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  width: 208,
                  borderRadius: 3,
                }}
              >
                <Image
                  source={require("./assets/yellow_block.png")}
                  style={{
                    marginRight: 11,
                    marginLeft: 11,
                  }}
                />
                <Text
                  style={{
                    lineHeight: 45,
                    fontFamily: "Roboto",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Mã giảm giá
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 99,
                  height: 45,
                  backgroundColor: "#0A5EB7",
                  top: 40,
                }}
              >
                <Text
                  style={{
                    lineHeight: 45,
                    fontFamily: "Roboto",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: 360,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            top: 15,
            height: 51,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              fontWeight: 700,
              color: "#000",
              left: 13,
            }}
          >
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              fontWeight: 700,
              color: "#134FEC",
              left: 24,
            }}
          >
            Nhập tại đây?
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: 360,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            top: 30,
            height: 51,
            paddingLeft: 13,
            paddingRight: 13,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Tạm tính
          </Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 19,
              lineHeight: 21.09,
              color: "#EE0D0D",
            }}
          >
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: 360,
            height: 120,
            justifyContent: "space-between",
            alignItems: "center",
            top: 156,
            padding: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 360,
              paddingLeft: 13,
              paddingRight: 13,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: 700,
                color: "#808080",
              }}
            >
              Thành tiền
            </Text>
            <Text
              style={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: 19,
                lineHeight: 21.09,
                color: "#EE0D0D",
              }}
            >
              {totalPrice.toLocaleString()} đ
            </Text>
          </View>

          <View
            style={{
              width: 334,
              borderRadius: 3,
              backgroundColor: "#E53935",
              height: 48,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                TIẾN HÀNH ĐẶT HÀNG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#C4C4C4",
      width: 360,
      height: 640,
    },
  });
