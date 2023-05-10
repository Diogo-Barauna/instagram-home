import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.icon1Container}>
        <Image
          source={require('./assets/icon1.png')}
          style={styles.icon1}
        />
      </View>
      <View style={styles.icon1Desc}>
        <p style={styles.p1}>• Camila •</p>
        <p style={styles.p2}>mahinazul</p>
        <Image
          source={require('./assets/pontos.png')}
          style={styles.dots}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/img.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <Image
          source={require('./assets/perfil.png')}
          style={styles.profileFooter}
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 667,
    border: 'solid',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1Container:{
    position: 'absolute',
    top: 125,
    right: 375 
  },
  icon1: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 30,
  },
  icon1Desc: {
    color: '#F4F4F4',
    position: 'absolute',
    bottom: 505,
    right: 265,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  p1: {
    position:'absolute',
    top: 18,
    fontSize: 13
  },
  p2: {
    fontSize: 15
  },
  dots: {
    position:'absolute',
    resizeMode: "contain",
    left: 285,
    top: 23,
    width: 50,
    height: 16,
  },
  imageContainer: {
    position: 'absolute',
    top: 165,
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 375,
    height: 450,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 50  
  },
  footer :{
    width: 375,
    top: 310,
    bottom: 0,

  },
  profileFooter: {
    resizeMode: "contain",
    width: 50,
    height: 30,
    left: 310
  }
});