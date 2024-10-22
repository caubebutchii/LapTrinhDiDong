import {
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useEffect, useState, useContext, createContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const imgC = createContext();
const Detail = ({ route, navigation }) => {
  const imgs = useContext(imgC);
  const [searchText, setSearchText] = useState('');
  const { item } = route.params;
  return (
    <ScrollView
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 8,
        paddingRight: 8,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E941411A',
          height: 340,
          borderRadius: 50,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.iconContainer}>
          a
        </TouchableOpacity>
        <Image
          source={imgs[item.image]}
          style={{
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View
        style={{
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 28,
            lineHeight: 26,

            fontFamily: 'UBUNTU',
            fontWeight: 700,
            width: 200,
          }}>
          {item.name}
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            opacity: '59%',
            fontFamily: 'Voltaire',
            fontWeight: 400,
          }}>
          {item.discount}% OFF |{(item.price * (100 - item.discount)) / 100}$
        </Text>

        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            fontFamily: 'Voltaire',
            fontWeight: 400,
            marginLeft: 30,
          }}>
          {item.price}$
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            fontFamily: 'Voltaire',
            fontWeight: 400,
          }}>
          Description
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          opacity: '56%',
        }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 16,
            fontFamily: 'Voltaire',
            fontWeight: 400,
          }}>
          {item.des}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 30,
          marginBottom: 30,
        }}>
        <TouchableOpacity>
          <Image source={require('./heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius: 30,
            borderColor: 'red',
            height: 30,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('List');
          }}>
          <Text
            style={{
              fontSize: 20,

              textAlign: 'center',

              fontFamily: 'VT323',
              fontWeight: 400,
              color: '#fff',
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const Item = ({ item, navigation }) => {
  const imgs = useContext(imgC);
  return (
    <TouchableOpacity
      style={{}}
      onPress={() => {
        navigation.navigate('Detail', {
          item,
        });
      }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#F7BA8326',
          borderRadius: '10',
          width: 142,
          marginTop: 10,
          marginRight: 4,
          height: 180,
          position: 'relative',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity style={{ position: 'absolute', top: 2, left: 2 }}>
            <Image source={require('./heart.png')} />
          </TouchableOpacity>
          <Image
            source={imgs[item.image]}
            style={{
              height: 120,
              resizeMode: 'contain',
              marginTop: 6,
            }}
          />
        </View>

        <Text>{item.name}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#F7BA83',
            }}>
            $
          </Text>
          <Text>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Stack = createNativeStackNavigator();
const List = ({ route, navigation }) => {
  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  fetch('https://670879498e86a8d9e42f0301.mockapi.io/bikes')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });

  const [isPress, setIsPress] = useState(1);
  return (
    <ScrollView
      style={{
        alignItems: 'center',
        padding: -10,
        margin: -10,
        marginBottom: 40,
      }}>
      <View
        style={{
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            color: '#E94141',
            fontSize: 20,
            lineHeight: 20,
            marginTop: 10,
            fontFamily: 'UBUNTU',
            fontWeight: 700,
            marginTop: 30,
          }}>
          The world’s Best Bike
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsPress(1);
          }}>
          <Text style={isPress === 1 ? styles.pText : styles.text}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsPress(2);
            setData1(data.filter((item) => item.type.includes('Roadbike')));
          }}>
          <Text style={isPress === 2 ? styles.pText : styles.text}>
            Roadbike
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsPress(3);
            setData1(data.filter((item) => item.type.includes('Mountain')));
          }}>
          <Text style={isPress === 3 ? styles.pText : styles.text}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginRight: -10,
        }}>
        <FlatList
          data={isPress === 1 ? data : data1}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          style={{
            justifyContent: 'space-between',
          }}
        />
      </View>
    </ScrollView>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }}>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 20,
          height: 87,
          textAlign: 'center',
          marginTop: 150,
          fontFamily: 'VT323',
          fontWeight: 400,
        }}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E941411A',
          height: 340,
          borderRadius: 50,
        }}>
        <Image
          source={require('./bifour_-removebg-preview.png')}
          style={{
            width: 240,
            height: 224,
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            lineHeight: 26,
            textAlign: 'center',
            marginTop: 61,
            fontFamily: 'UBUNTU',
            fontWeight: 700,
            width: 200,
            alignItems: 'center',
            marginTop: 30,
          }}>
          POWER BIKE SHOP
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E94141',
            borderRadius: 30,
            borderColor: 'red',
            height: 51,
            width: 280,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('List');
          }}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 20,
              textAlign: 'center',

              fontFamily: 'VT323',
              fontWeight: 400,
              color: '#FEFEFE',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default function App() {
  const imgs = {
    './bione-removebg-preview(1).png': require('./bione-removebg-preview(1).png'),
    './bithree_removebg-preview.png': require('./bithree_removebg-preview.png'),
    './bitwo-removebg-preview.png': require('./bitwo-removebg-preview.png'),
    './bione-removebg-preview.png': require('./bione-removebg-preview.png'),
  };
  return (
    <imgC.Provider value={imgs}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="List" component={List} />

          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </imgC.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'VT323',
    fontWeight: 400,
    color: '#E94141',
  },
  text: {
    fontSize: 18,

    textAlign: 'center',

    fontFamily: 'VT323',
    fontWeight: 400,
    color: '#BEB6B6',
  },
  btn: {
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: 'none',
    borderRadius: 5,
    borderColor: '#E9414187',
    height: 32,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
   input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    iconContainer: {
        paddingLeft: 10,
    },
});
