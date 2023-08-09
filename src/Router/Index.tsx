import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Components/Home';
import Splash from '../screens/OnBoarding/Splash';
import WelcomeSplash1 from '../screens/OnBoarding/WelcomeSplash1';
import WelcomeSplash2 from '../screens/OnBoarding/WelcomeSplash2';
import WelcomeSplash3 from '../screens/OnBoarding/WelcomeSplash3';
import PersonalInformation from '../screens/Register/PersonalInformation';
import LoginPage1 from '../screens/Login/LoginPage1';
import Onboarding from '../Components/Onboarding/Onboarding';

export type RootStackParams = {
  Splash: undefined;
  WelcomeSplash1: undefined;
  WelcomeSplash2: undefined;
  WelcomeSplash3: undefined;
  PersonalInformation: undefined;
  LoginPage1: undefined;
  Home: undefined;
  Onboarding: undefined;
};

const stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{freezeOnBlur: true}}
        />
        <stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'pop',
            animation: 'fade',
          }}
        />
        {/* <stack.Screen
          name="WelcomeSplash1"
          component={WelcomeSplash1}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <stack.Screen
          name="WelcomeSplash2"
          component={WelcomeSplash2}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <stack.Screen
          name="WelcomeSplash3"
          component={WelcomeSplash3}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
          }}
        />
        <stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }}
        />
        <stack.Screen
          name="LoginPage1"
          component={LoginPage1}
          options={{
            freezeOnBlur: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }}
        />
        <stack.Screen name="Home" component={Home} /> */}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
