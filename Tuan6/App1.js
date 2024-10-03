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
  
  const data1 = [
    {
      id: 1,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./giacchuyen1.png'),
    },
  
    {
      id: 2,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./dauchuyendoipsps21.png'),
    },
  
    {
      id: 3,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./carbusbtops21.png'),
    },
  ];
  
  const data2 = [
    {
      id: 4,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./daynguon1.png'),
    },
  
    {
      id: 5,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./dauchuyendoi1.png'),
    },
  
    {
      id: 6,
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: '69.900 đ',
      image: require('./daucam1.png'),
    },
  ];
  
  const Item = ({ item }) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={item.image} style={{}} />
      <View
        style={{
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            marginBottom: 4,
          }}>
          {item.name}
        </Text>
        <Image
          source={require('./Group4.png')}
          style={{
            marginTop: 2,
            marginBottom: 2,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{item.price}</Text>
  
          <Text
            style={{
              color: '#969DAA',
              fontSize: 12,
            }}>
            -39%
          </Text>
        </View>
      </View>
    </View>
  );
  export default function App() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 42,
            backgroundColor: '#1BA9FF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 17,
            paddingRight: 17,
          }}>
          <TouchableOpacity>
            <Image source={require('./ant-design_arrow-left-outlined.png')} />
          </TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 192,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingLeft: 9,
            }}>
            <TouchableOpacity>
              <Image source={require('./whh_magnifierlook.png')} style={{}} />
            </TouchableOpacity>
            <Text
              style={{
                left: 10,
                lineHeight: 30,
                color: '#7D5B5B',
                fontSize: 12,
              }}>
              Dây cáp USB
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={require('./bi_cart-check.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./dot.png')} />
          </TouchableOpacity>
        </View>
  
        <View
          style={{
            top: 24,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <FlatList
            style={
              {
                // flex: 1,
              }
            }
            data={data1}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
  
          <FlatList
            style={
              {
                // flex: 1,
              }
            }
            data={data2}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
  
        <View
          style={{
            height: 49,
            backgroundColor: '#1BA9FF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 17,
            paddingRight: 17,
          }}>
          <TouchableOpacity>
            <Image source={require('./Group10.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./home.png')}
              style={{
                color: '#000',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./Vector1.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  