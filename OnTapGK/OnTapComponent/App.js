import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    View,
    FlatList,
    CheckBox,
  } from 'react-native';
  import RadioGroup from 'react-native-radio-buttons-group';
  import { useState } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  const Screen2 = ({ route, navigation }) => {};
  const Screen1 = ({ navigation }) => {
    const data = [
      {
        id: '1',
        image: './bione-removebg-preview(1).png',
        name: 'Pinarello',
        price: 1800,
        type: 'Roadbike',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '2',
        image: './bione-removebg-preview(1).png',
        name: 'Pina Mountain',
        price: 1700,
        type: 'Mountain',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '3',
        image: './bithree_removebg-preview.png',
        name: 'Pina bike',
        price: 1800,
        type: 'Roadbike',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '4',
        image: './bitwo-removebg-preview.png',
        name: 'Pinarello',
        price: 1800,
        type: 'Roadbike',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '5',
        image: './bithree_removebg-preview.png',
        name: 'Pinarello',
        price: 1800,
        type: 'Roadbike',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '6',
        image: './bione-removebg-preview.png',
        name: 'Pinarello',
        price: 1800,
        type: 'Roadbike',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '15',
        liked: false,
      },
      {
        id: '7',
        image: './bione-removebg-preview.png',
        name: 'Mountain bike',
        price: 1800,
        type: 'Mountain',
        des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
        discount: '12',
        liked: false,
      },
    ];
    const [text, changeText] = useState('0');
    const [res, setRes] = useState('');
    const [cb1, setcb1] = useState('true');
    const [cb2, setcb2] = useState('false');
    const handle = () => {
      let res = '';
      if (cb1) res += 'cb1 ';
      if (cb2) res += 'cb2 ';
      for (let i = 0; i < text; i++) res += 'text ';
      setRes(res);
    };
    const [selectedId, setSelectedId] = useState('');
  
    const radioButtons = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
    return (
      <View>
        <Text>{res}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>input</Text>
          <TextInput
            style={{
              width: 118,
              height: 33,
              backgroundColor: '#FFFFFF',
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'Roboto',
              lineHeight: 23.44,
              textAlign: 'right',
            }}
            onChangeText={(text) => changeText(text)}
            keyboardType="numeric"
            value={text}
          />
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>checkbox1</Text>
          <CheckBox title="" value={cb1} onValueChange={() => setcb1(!cb1)} />
        </View>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>checkbox2</Text>
          <CheckBox title="" value={cb2} onValueChange={() => setcb2(!cb2)} />
        </View>
        <View style={{ padding: 20 }}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>
  
        <View
          style={{
            color: 'red',
            width: 40,
            height: 20,
          }}>
          <TouchableOpacity
            style={{
              color: 'red',
              width: 40,
              height: 20,
            }}
            onPress={() =>
              navigation.navigate('Screen2', {
                id: '7',
                image: './bione-removebg-preview.png',
                name: 'Mountain bike',
                price: 1800,
                type: 'Mountain',
                des: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
                discount: '12',
                liked: false,
              })
            }>
            button
          </TouchableOpacity>
        </View>
  
        <View
          style={{
            color: 'red',
            width: 100,
            height: 40,
            borderColor: '#000',
            borderWidth: 1,
          }}>
          <TouchableOpacity style={{}} onPress={handle}>
            <Text>to screen 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const Stack = createNativeStackNavigator();
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
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
  