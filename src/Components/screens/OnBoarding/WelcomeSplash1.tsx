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
import WelcomeSplash2 from './WelcomeSplash2';

const WelcomeSplash1 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.navigate('WelcomeSplash2');
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
        source={require('../../../assets/images/KoinLine.png')}
        style={styles.KoinLine}
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
        <Text style={styles.BoldText}>
          Perbankan yang <Text style={styles.BoldTextYellow}>Syariah</Text>
        </Text>
        <Text style={styles.Text}>
          Mari kita membangun dunia perbank-an yang lebih islami dengan
          transaksi yang berakad
        </Text>
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

export default WelcomeSplash1;

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
    left: 10,
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
    right: 10,
  },

  KoinLine: {
    width: '145%',
    height: '80%',
    position: 'absolute',
    right: -35,
    top: 80,
  },

  TextBox: {
    alignSelf: 'flex-start',
    top: 155,
    marginHorizontal: 25,
  },

  BoldText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
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
    top: 230,
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
