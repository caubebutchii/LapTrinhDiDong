import React, { useEffect, useState } from 'react';
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
const Item = ({ item }) => (
  <View
    style={{
      backgroundColor: '#DEE1E678',
    }}>
    <Image source={require('./assets/Frame(4).png')} />
    <Text>{item.todo}</Text>
    <Image source={require('./assets/Frame(3).png')} />
  </View>
);
function HomeScreen({ navigation }) {
  const [uname, setName] = useState('Enter your name');
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
          }}
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
            }}>
            GET STARTED ->
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Details({ route, navigation }) {
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity>
            <Image source={require('./assets/IconButton11.png')} />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Image source={require('./assets/Frame11.png')} />
          </View>
          <View>
            <Text>Hi {route.params.name}</Text>
            <Text>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View>
        <Image source={require('./assets/Frame(2).png')} />
        <Text>Search</Text>
      </View>

      <ScrollView>
        <FlatList
          data={todoList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>

      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Add', {
              name: route.params.name,
            })
          }>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Add({ route, navigation }) {
  return (
    <View>
      <View>
        <View>
          <View>
            <Image source={require('./assets/Frame11.png')} />
          </View>
          <View>
            <Text>Hi {route.params.name}</Text>
            <Text>Have agrate day a head</Text>
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
