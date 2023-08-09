import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../Router/Index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.replace('WelcomeSplash1');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Image
        source={require('../../../assets/images/SplashLine1.png')}
        style={styles.SplashLine1}
      />
      <Image
        source={require('../../../assets/images/PitLogo.png')}
        style={styles.PitLogo}
      />
      <Image
        source={require('../../../assets/images/SplashLine2.png')}
        style={styles.SplashLine2}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  PitLogo: {
    backgroundColor: '#000000',
    right: 30,
  },
  SplashLine1: {
    backgroundColor: '#000000',
    width: '100%',
    height: 220,
    top: '-12%',
  },
  SplashLine2: {
    backgroundColor: '#000000',
    width: '100%',
    height: 230,
    top: '12%',
  },
});
