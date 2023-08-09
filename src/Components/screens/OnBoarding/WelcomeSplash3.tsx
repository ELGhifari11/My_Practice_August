import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Animated,
  TurboModuleRegistry,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../Router/Index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import WelcomeSplash1 from './WelcomeSplash1';

const WelcomeSplash3 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    let timer = setTimeout(() => {
      // navigation.navigate('WelcomeSplash3');
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <Image
        source={require('../../../assets/images/PitLogo.png')}
        style={styles.PitLogo}
      />
      <Image
        source={require('../../../assets/images/TopLineSplash3.png')}
        style={styles.TopLineSplash3}
      />
      <Image
        source={require('../../../assets/images/BottomLineSplash3.png')}
        style={styles.BottomLineSplash3}
      />

      <View style={styles.lineStatusActive}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'yellow',
            width: progressAnimation,
            borderColor: 'transparent',
            borderRadius: 20,
          }}></Animated.View>
      </View>
      <View style={styles.lineStatusA}></View>
      <View style={styles.lineStatusB}></View>

      <View style={styles.TextBox}>
        <Text style={styles.BoldText}>Selamat Datang </Text>
      </View>

      <View style={styles.ButtonBox}>
        <TouchableOpacity
          style={styles.ButtonDaftar}
          onPress={() => navigation.navigate('PersonalInformation')}>
          <Text style={styles.TextButtonDaftar}>Daftar Sekarang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonLogin}
          onPress={() => navigation.navigate('LoginPage1')}>
          <Text style={styles.TextButtonLogin}>Sudah Punya Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeSplash3;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },

  lineStatusActive: {
    height: 8,
    width: '30%',
    borderWidth: 1,
    backgroundColor: 'silver',
    position: 'absolute',
    top: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    right: 10,
  },
  lineStatusA: {
    height: 8,
    width: '30%',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    right: 137,
  },

  lineStatusB: {
    height: 8,
    width: '30%',
    borderWidth: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 50,
    borderColor: 'transparent',
    borderRadius: 25,
    left: 10,
  },

  PitLogo: {
    width: 230,
    height: 198,
    position: 'absolute',
    left: 33,
    top: 190,
  },

  TopLineSplash3: {
    width: 550,
    height: 250,
    position: 'absolute',
    left: -40,
    top: -15,
  },
  BottomLineSplash3: {
    width: '25%',
    height: '50%',
    position: 'absolute',
    left: 0,
    bottom: -20,
  },

  TextBox: {
    alignSelf: 'center',
    top: 145,
    marginHorizontal: 25,
  },

  BoldText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 35,
  },

  BoldTextYellow: {
    color: 'yellow',
  },

  Text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 12,
  },

  ButtonBox: {
    top: 255,
  },

  ButtonDaftar: {
    backgroundColor: 'yellow',
    height: 50,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  TextButtonDaftar: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonLogin: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10,
  },
  TextButtonLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
