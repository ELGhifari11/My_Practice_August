import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import React from 'react';

interface NextButtonProps {
  scrollTo: any;
}

const NextButton: React.FC<NextButtonProps> = ({scrollTo}) => {
  return (
    <View style={styles.ButtonBox}>
      <TouchableOpacity
        style={{position: 'absolute', left: 100, bottom: 100}}
        activeOpacity={0.5}
        onPress={scrollTo}>
        <Image
          source={require('../../assets/images/next.png')}
          style={{height: 125, width: 125}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonDaftar} activeOpacity={0.5}>
        <Text style={styles.TextButtonDaftar}>Daftar Sekarang</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonLogin} activeOpacity={0.5}>
        <Text style={styles.TextButtonLogin}>Sudah Punya Akun</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  ButtonBox: {
    top: -30,
  },

  ButtonDaftar: {
    backgroundColor: '#FFDE59',
    height: 50,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  TextButtonDaftar: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonLogin: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#7AAC46',
    height: 50,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  TextButtonLogin: {
    color: '#7AAC46',
    fontSize: 16,
    fontWeight: '600',
  },
});
