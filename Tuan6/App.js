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
  
  const data = [
    {
      id: 1,
      name: 'Cá nấu lẩu, nấu mì mini',
      shop: 'Devang',
      image: require('./ca_nau_lau.png'),
    },
  
    {
      id: 2,
      name: '1KG KHÔ GÀ BƠ TỎI...',
      shop: 'LTD Food',
      image: require('./ga_bo_toi.png'),
    },
  
    {
      id: 3,
      name: 'Xe cần cẩu đa năng',
      shop: 'Thế giới đồ chơi',
      image: require('./xa_can_cau.png'),
    },
  
    {
      id: 4,
      name: 'Đồ chơi dạng mô hình',
      shop: 'Thế giới đồ chơi',
      image: require('./do_choi_dang_mo_hinh.png'),
    },
  
    {
      id: 5,
      name: 'Lãnh đạo đơn giản',
      shop: 'Minh Long Book',
      image: require('./lanh_dao_gian_don.png'),
    },
  
    {
      id: 6,
      name: 'Hiểu lòng con trẻ',
      shop: 'Minh Long Book',
      image: require('./hieu_long_con_tre.png'),
    },
  
    {
      id: 7,
      name: 'Trump lãnh đạo',
      shop: 'Minh Long Book',
      image: require('./trump_1.png'),
    },
  ];
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
          source={item.image}
          style={{
            left: 2,
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
    return (
      <View style={styles.container}>
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
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
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
      </View>
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
  