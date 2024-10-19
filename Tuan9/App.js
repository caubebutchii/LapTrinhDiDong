import {
    Text,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
  import {useEffect,useState} from 'react'
  
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            marginTop: 61,
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
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
  
          
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
  