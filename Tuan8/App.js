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
const Item = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: '#F4DDDD',
        borderRadius: 10,
        height: 115,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image />

      <View style={{
        justifyContent: "space-between"
      }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 23.44,
            height: 35,
          }}>
          {item.name}
        </Text>

        <Text
          style={{
            fontWeight: 700,
            fontSize: 17,
            lineHeight: 17.58,
            height: 35,
            color: '#0000008A',
            opacity: 54,
          }}>
          {item.desc}
        </Text>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 23.44,
              height: 35,
            }}>
            ${item.price}
          </Text>
          <TouchableOpacity>
            <Image source={require('./assets/plus_button.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default function App() {
  const data = [];
  return (
    <View style={styles.container}>
      <View style={{
        marginTop: 10
      }}>
        <Text style={{
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 18.75,
          opacity: 65,
        }}>Welcome, Jala!</Text>
        <Text style={{
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 23.44,
          opacity: 65,
          top: 6
        }}>Choice you Best food</Text>
      </View>

      <View>
        <View>
          <TextInput value={'Search food'} style={{
            borderWidth: 1,

          }}/>
        </View>
        <TouchableOpacity>
          <Image source={require('./assets/Vector.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <TouchableOpacity>
            <Text>Donut</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <FlatList
          data={data}
          renderItem={(item) => {}}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
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
});
