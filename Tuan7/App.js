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
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const data =[
  {
    "name": "qA!vBj^')1",
    "price": 28719,
    "image": "_x>\\2^GdNj",
    "id": "1"
  },
  {
    "name": "rcMy$?2rl(",
    "price": 64191,
    "image": "_T5H+1%w;P",
    "id": "2"
  },
  {
    "name": "wM2JYT65\"f",
    "price": 28759,
    "image": "w8{8m<Dvy<",
    "id": "3"
  },
  {
    "name": "TD5u=GQt[3",
    "price": 3611,
    "image": "YF'O,R]12,",
    "id": "4"
  },
  {
    "name": ">qt5W5N_'2",
    "price": 1052,
    "image": "A(qmZel%*]",
    "id": "5"
  },
  {
    "name": "S}`18xb)y#",
    "price": 96086,
    "image": "6l?$):TM%k",
    "id": "6"
  },
  {
    "name": "&)098o,/*T",
    "price": 75240,
    "image": "b>`H}RKr$5",
    "id": "7"
  },
  {
    "name": "|{abUwvUo9",
    "price": 63753,
    "image": "e:3f@1/[dR",
    "id": "8"
  },
  {
    "name": "Poe&=yeK=%",
    "price": 45932,
    "image": "4+iWS,UOF%",
    "id": "9"
  },
  {
    "name": "PEBHc*]?Dp",
    "price": 21197,
    "image": "S!eT'G5^Zw",
    "id": "10"
  },
  {
    "name": "U/a<c$F)\\0",
    "price": 36616,
    "image": "G*5Q#EY\"%:",
    "id": "11"
  },
  {
    "name": "n`ZNHHGLC-",
    "price": 24382,
    "image": "z?)s3lM-t:",
    "id": "12"
  },
  {
    "name": ";\\\\`?bztj+",
    "price": 61997,
    "image": ":(_nkzf\\DM",
    "id": "13"
  },
  {
    "name": "2}ZrOH3}/,",
    "price": 77343,
    "image": "j!Id].D^x$",
    "id": "14"
  }
]

const Item = ({ item }) => (
  <TouchableOpacity style={{
    width: "100%"
  }}>
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: item.id === 1 ? '#fff' : 'none',
        paddingRight: 14,
      }}>
      
      <View
        style={{
          justifyContent: 'flex-start',
          height: 80,
        }}>
        <Text
          style={{
            fontSize: 13,
            top: 4,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: 'red',
              top: 10,
              fontSize: 12,
              color: '#7D5B5B',
            }}>
            Price
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: 'red',
                top: 10,
                fontSize: 12,
                color: '#FF0E0E',
                marginLeft: 4,
              }}>
              {item.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F31111',
            width: 80,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#C4C4C4',
      }}></View>
  </TouchableOpacity>
);

export default function App() {

  const addItem = () => {
    data.forEach(item => {
      fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products2', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: 
            JSON.stringify(item)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          
    })
  }

  const updateItem = () => {
   
      fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products2/7', {
            method: 'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "name": "qA!vBjasds1",
              "price": 1111,
              "image": "_x>\\2^GdNj",
              
              }
            )
            
          })
          .then(response => response.json())
          .then(data => console.log(data))
          
    
  }

  const delItem = () => {
   
      fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products2/7', {
            method: 'DELETE',
            
          })
          
          
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        margin: 10
      }} >
        <TouchableOpacity
          style={{
            backgroundColor: '#F31111',
            width: 100,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={addItem}
          >
          <Text
            style={{
              color: '#fff',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        margin: 10
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F31111',
            width: 100,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={updateItem}>
          <Text
            style={{
              color: '#fff',
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        margin: 10
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F31111',
            width: 100,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={delItem}>
          <Text
            style={{
              color: '#fff',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      style={{
        width: "100%"
      }}>
        <FlatList
          data={data} 
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()} 
        />
      </ScrollView>
    </SafeAreaView>
  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
