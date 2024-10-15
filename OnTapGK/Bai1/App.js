import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Details = ({route, navigation}) => {
  return (
    <View>

    </View>
  )
}
const HomeScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("Enter your email address");
  const [pass, setPass] = useState("Enter your password");
  const loginData = [
    {
      email: 'pencilboi01@gmail.com',
      password: "caubebutchi01"
    },
    {
      email: 'pencilboi02@gmail.com',
      password: "caubebutchi02"
    },
    {
      email: 'pencilboi03@gmail.com',
      password: "caubebutchi03"
    },
    {
      email: 'pencilboi04@gmail.com',
      password: "caubebutchi04"
    },
    {
      email: 'pencilboi05@gmail.com',
      password: "caubebutchi05"
    },
  ]
  const handleCon = ({email, pass}) =>{
      
  }
  return (
    <View
      style={
        (styles.container,
        {
          alignItems: 'center',
          backgroundColor: '#fff',
        })
      }>
      <Image
        source={require('./icon.png')}
        style={{
          marginTop: 40,
        }}
      />
      <Text
        style={{
          fontWeight: 700,
          fontSize: 25,
          marginTop: 12,
        }}>
        Hello Again!
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#666',
          fontWeight: 500,
          opacity: '60%',
          marginTop: 2,
        }}>
        Log in to your account
      </Text>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'none',
          borderRadius: 10,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          width: '80%',
          opacity: '60%',
        }}>
        <Image source={require('./Vector.png')} />
        <TextInput
          value= {email}
          style={{
            marginLeft: 10,
          }}
          onChange={(text)=>{setEmail(text)}}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'none',
          borderRadius: 10,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          width: '80%',
          opacity: '60%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image source={require('./lock.png')} />
          <TextInput
            value= {pass}
            style={{
              marginLeft: 10,
            }}
            onChange={(text)=>{setPass(text)}}
          />
        </View>
        <TouchableOpacity>
          <Image source={require('./eye.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 9,
          width: '80%',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: 'cyan',
          }}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: 'cyan',
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
          onPress={()=> {
            navigation.navigate('Details')
          }}
        >
        <Text
          style={{
            color: '#fff',
          }}>
          Continue
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 30,
        }}>
        <Text>or</Text>
      </View>

      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./google.png')}
          style={{
            marginLeft: 4,
            marginRight: 4,
          }}
        />
        <Image
          source={require('./face.png')}
          style={{
            marginLeft: 4,
            marginRight: 4,
          }}
        />
        <Image
          source={require('./apple.png')}
          style={{
            marginLeft: 4,
            marginRight: 4,
          }}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}></Stack.Screen>
          <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
