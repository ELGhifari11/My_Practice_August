import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

interface OnboardingItemProps {
  item: {
    image: any;
    title: string;
    description: string;
  };
}

const OnboardingItems: React.FC<OnboardingItemProps> = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.3, top: 60}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItems;

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    top: 55,
    justifyContent: 'center',
  },
  title: {
    color: '#7AAC46',
    fontWeight: '800',
    fontSize: 35,
    textAlign: 'center',
  },
  description: {
    color: 'black',
    fontWeight: '400',
    marginTop: 20,
    textAlign: 'center',
  },
});
