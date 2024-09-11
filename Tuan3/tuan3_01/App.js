import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/Ellipse 8.png')}
          style={{
            marginTop: 52,
            width: 140,
            height: 140,
          }}
        />
      </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 71,
          }}>
          <Text
            style={
              ({
                width: 189,
                height: 58,
                fontFamily: 'Roboto',
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 0,
                lineHeight: 32,
                color: '#000000FF',
                textAlign: 'center',
              })
            }>
            GROW YOUR BUSINESS
          </Text>
        </View>
        <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 52,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            height: 36,
            width: 302,
            fontFamily: 'Roboto',
            letterSpacing: 0,
            lineHeight: 32
          }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 75,
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
