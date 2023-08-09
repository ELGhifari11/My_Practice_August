import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import Onboarding from './Components/Onboarding/Onboarding';
import Splash from './screens/OnBoarding/Splash';
import Index from './Router/Index';

const Loading = () => {
  <View>
    <ActivityIndicator size={'large'} />
  </View>;
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Onboarding />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
