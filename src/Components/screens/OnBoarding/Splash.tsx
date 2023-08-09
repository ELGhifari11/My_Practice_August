import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../Router/Index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Splash = () => {
  const {width} = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Image
        source={require('../../../assets/images/gg.gif')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
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
    backgroundColor: 'white',
  },
  image: {
    flex: 0.3,
    top: -20,
    justifyContent: 'center',
  },
});
