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
  import React, {useState} from 'react'
  
  import { NavigationContainer } from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack'
  
  const Stack = createNativeStackNavigator();
  
  const HomeScreen = ({route, navigation}) =>
  {
    return (
      <View>
        <Image source={require("./icon.png")}/>
        <Text>Hello Again</Text>
        <Text>Log in to your account</Text>
        <View>
          <Image source={require("./Vector.png")}/>
          <TextInput value="Enter your email address"/>
        </View>
  
        <View>
          <Image source={require("./lock.png")}/>
          <TextInput value="Enter your password"/>
           <Image source={require("./eye.png")}/>
        </View>
  
         <Text>Forgot password</Text>
  
         <TouchableOpacity>
          <Text>
            Continue
          </Text>
         </TouchableOpacity>
  
         <View>
          <Text>or</Text>
         </View>
  
         <View>
          <Image source={require("./google.png")}/>
          <Image source={require("./face.png")}/>
          <Image source={require("./apple.png")}/>
         </View>
      </View>
    )
  }
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
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
  