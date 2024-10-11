import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Item = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: '#F4DDDD',
        borderRadius: 10,
        height: 115,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
      }}>
      <Image />

      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 23.44,
            flex: 1,
            height: 30,
            marginTop: 5,
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 14.58,
            flex: 1,
            color: '#0000008A',
            opacity: 54,
            height: 20,
          }}>
          {item.desc}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'flex-end',
            height: 35,
          }}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 23.44,
              marginBottom: 10,
            }}>
            ${item.price}.00
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navige();
            }}>
            <Image source={require('./assets/plus_button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

function HomeScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [isChoosed, setChoosed] = useState(1);
  const handlePressBtn = (btn) => {
    setChoosed(btn)
  }
  const fetchData = () => {
    fetch('https://670879498e86a8d9e42f0301.mockapi.io/donuts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 10,
        }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 18.75,
            opacity: 65,
          }}>
          Welcome, Jala!
        </Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 23.44,
            opacity: 65,
            top: 6,
          }}>
          Choice you Best food
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            value={'Search food'}
            style={{
              borderWidth: 1,
              borderRadius: 3,
              borderColor: '#000',
              height: 40,
              backgroundColor: '#C4C4C4',
              opacity: '10%',

              paddingLeft: 10,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F1B000',
            width: 40,
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 14,
            marginRight: 0,
          }}>
          <Image source={require('./assets/Vector.png')} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
        }}>
        <View>
          <TouchableOpacity
            style={
             isChoosed===1 ? styles.btnPress : styles.btn
            }
            onPress={()=> handlePressBtn(1)}>
            <Text
              style={{
                color: '#0C0606',
                fontWeight: 700,
                fontSize: 14,
              }}>
              Donut
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={
             isChoosed===2 ? styles.btnPress : styles.btn
            }
            onPress={()=> handlePressBtn(2)}>
            <Text
              style={{
                color: '#0C0606',
                fontWeight: 700,
                fontSize: 14,
              }}>
              Donut
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={
             isChoosed===3 ? styles.btnPress : styles.btn
            }
            onPress={()=> handlePressBtn(3)}>
            <Text
              style={{
                color: '#0C0606',
                fontWeight: 700,
                fontSize: 14,
              }}>
              Donut
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnPress: {
    height: 35,
    borderRadius: 5,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1B000',
    width: 101,
    marginLeft: 4,
  },
  btn: {
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    width: 101,
    marginLeft: 4,
  },
});
