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


const getImage = (imageName) => {
  switch (imageName) {
    case 'ca_nau_lau.png':
      return require('./ca_nau_lau.png');
    case 'ga_bo_toi.png':
      return require('./ga_bo_toi.png');
    case 'xa_can_cau.png':
      return require('./xa_can_cau.png');
    case 'do_choi_dang_mo_hinh.png':
      return require('./do_choi_dang_mo_hinh.png');
    case 'lanh_dao_gian_don.png':
      return require('./lanh_dao_gian_don.png');
    case 'hieu_long_con_tre.png':
      return require('./hieu_long_con_tre.png');
    case 'trump_1.png':
      return require('./trump_1.png');
    default:
      return null; 
  }
}

const Item = ({ item }) => (
  <TouchableOpacity>
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: item.id === 1 ? '#fff' : 'none',
        paddingRight: 14,
      }}>
      <Image
        source={getImage(item.image)} 
        style={{
          width: 60,
          height: 60,
          marginLeft: 8,
        }}
      />
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
            Shop
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
              {item.shop}
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
            Chat
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
  const [products, setProducts] = useState([]); 

  useEffect(() => {
   
    fetch('https://66fd0107c3a184a84d18b0b1.mockapi.io/products')
      .then((response) => response.json())
      .then((data) => setProducts(data)) 
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
          }}>
          Chat
        </Text>
        <TouchableOpacity>
          <Image source={require('./bi_cart-check.png')} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 52,
          lineHeight: 16,
          justifyContent: 'center',
          paddingLeft: 32,
          paddingRight: 32,
          fontSize: 15,
        }}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </View>

      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#C4C4C4',
        }}></View>

      {}
      <ScrollView>
        <FlatList
          data={products} 
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()} 
        />
      </ScrollView>

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
          <Image source={require('./home.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./Vector1.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
});