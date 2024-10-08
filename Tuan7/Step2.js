import React, { useEffect, useState } from 'react';
import CheckBox from 'react-native-check-box';
import {
  Text,
  SafeAreaView,
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

const todoList = [];
const Item = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.checked);
  const handleCheckBoxClick = () => {
    setIsChecked = !isChecked;
    item.isChecked = !isChecked;
  };
  return (
    <View
      style={{
        backgroundColor: '#DEE1E678',
        flexDirection: 'row',
        marginTop: 16,
        height: 48,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CheckBox
          style={{
            color: '#14923E',
          }}
          onClick={handleCheckBoxClick}
          isChecked={item.checked}
        />
        <Text style={{
          marginLeft: 8
        }}>{item.content}</Text>
      </View>
      <Image source={require('./assets/Frame(3).png')} style={{}} />
    </View>
  );
};
function HomeScreen({ navigation }) {
  const [uname, setName] = useState('Twinkle');
  return (
    <View
      style={{
        padding: 28,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 82,
        }}>
        <Image source={require('./assets/Image95.png')} />
      </View>
      <Text
        style={{
          color: '#8353E2',
          lineHeight: 36,
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          fontStyle: 'Epilogue',
        }}>
        MANAGE YOUR TASK
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 60,
          padding: 16,
          borderColor: '#000',
          borderRadius: 5,
          borderWidth: 1,
          height: 43,
        }}>
        <Image source={require('./assets/Frame.png')} />
        <TextInput
          onChangeText={(text) => setName(text)}
          value={uname}
          style={{
            color: '#BCC1CA',
            marginLeft: 10,
            borderWidth: 0,
            alignContent: 'center',
            fontStyle: 'Epilogue',
          }}
          onFocus={(e) => (e.target.style.borderWidth = 0)}
          onBlur={(e) => (e.target.style.borderWidth = 0)}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            height: 44,
            width: 190,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            marginTop: 100,
          }}
          onPress={() =>
            navigation.navigate('Details', {
              name: uname,
            })
          }>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 26,
              fontWeight: 'bold',
              color: '#FFFFFF',
              fontStyle: 'Epilogue',
            }}>
            GET STARTED ->
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Details({ route, navigation }) {
  const [search, setSearch] = useState('Search');
  const [todoList, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://670501dc031fd46a830e46b6.mockapi.io/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <View
      style={{
        padding: 18,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Image source={require('./assets/IconButton11.png')} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Image source={require('./assets/Frame11.png')} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 2,
            }}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: '#171A1F',
                lineHeight: 30,
                textAlign: 'center',
                fontStyle: 'Epilogue',
                width: 110,
              }}>
              Hi {route.params.name ? route.params.name : ' '}
            </Text>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: '#77767b',
                lineHeight: 22,
                textAlign: 'center',
                fontStyle: 'Epilogue',
              }}>
              Have a great day a head
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 60,
          padding: 16,
          borderColor: '#9095A0',
          borderRadius: 5,
          borderWidth: 1,
          height: 44,
        }}>
        <Image source={require('./assets/Frame(2).png')} />
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={{
            color: '#BCC1CA',
            marginLeft: 10,
            borderWidth: 0,
            alignContent: 'center',
            fontStyle: 'Epilogue',
          }}
          onFocus={(e) => (e.target.style.borderWidth = 0)}
          onBlur={(e) => (e.target.style.borderWidth = 0)}
        />
      </View>

      <ScrollView>
        <FlatList
          data={todoList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            width: 69,
            height: 69,
            backgroundColor: '#00BDD6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            padding: 0,
          }}
          onPress={() =>
            navigation.navigate('Add', {
              name: route.params.name,
            })
          }>
          <Text
            style={{
              lineHeight: 69,
              color: '#fff',
              fontSize: 40,
              fontWeight: 300,
              padding: 0,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Add({ route, navigation }) {
  return (
    <View style={{
        padding: 18,
      }}>
         <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Image source={require('./assets/Frame11.png')} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 2,
            }}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: '#171A1F',
                lineHeight: 30,
                textAlign: 'center',
                fontStyle: 'Epilogue',
                width: 110,
              }}>
              Hi {route.params.name ? route.params.name : ' '}
            </Text>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: '#77767b',
                lineHeight: 22,
                textAlign: 'center',
                fontStyle: 'Epilogue',
              }}>
              Have a great day a head
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require('./assets/IconButton11.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScrollView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
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
});
