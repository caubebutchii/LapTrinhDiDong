import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 55,
        }}>
        <Image
          source={require('./assets/lock.png')}
          style={{
            
            width: 104.9393081665039,
            height: 116.95268249511719            ,
          }}
        />
      </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 71,
            
            border: '1px solid #000000',
          }}>
          <Text
            style={
              ({
                width: 133,
            height: 58,
                fontFamily: 'Roboto',
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 0,
                lineHeight: 32,
                color: '#000000FF',
                textAlign: 'center',
                flexWrap: 'wrap',
              })
            }>
            GROW YOUR BUSINESS
          </Text>
        </View>
        <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 44,
          
        }}>
        <Text
          style={{
            height: 53,
          width: 302,
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            
            fontFamily: 'Roboto',
            letterSpacing: 0,
            lineHeight: 32,
            color: '#000000FF'
          }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
      style={{
        
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16
      }}>
        <Text
        style={{
          height: 53,
            width: 302,
          textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            
            fontFamily: 'Roboto',
            letterSpacing: 0,
            lineHeight: 32,
            color: '#000000FF'
        }}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
    width: 360,
    height: 640
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 8,
    width: 119,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000FF',
    fontSize: 20,
    fontWeight: 'bold',
    height: 48,
    width: 77,
    lineHeight: 48,
    fontFamily: 'Roboto',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
