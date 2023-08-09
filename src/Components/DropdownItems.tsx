import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';

const data = [
  {label: 'Nanggroe Aceh Darussalam', value: '1'},
  {label: 'Sumatra utara', value: '2'},
  {label: 'Sumatra Selatan', value: '3'},
  {label: 'Sumatra Barat', value: '4'},
  {label: 'Bengkulu', value: '5'},
  {label: 'Riau', value: '6'},
  {label: 'Kepulauan Riau', value: '7'},
  {label: 'Jambi', value: '8'},
  {label: 'Lampung', value: '9'},
  {label: 'Bangka Belitung ', value: '10'},
  {label: 'Kalimantan Timur', value: '11'},
  {label: 'Kalimantan Selatan', value: '12'},
  {label: 'Kalimantan Barat', value: '13'},
  {label: 'Kalimantan Tengah', value: '14'},
  {label: 'Kalimantan Utara', value: '15'},
  {label: 'Banten', value: '16'},
  {label: 'DKI Jakarta', value: '17'},
  {label: 'Jawa Barat', value: '18'},
  {label: 'Jawa Tengah', value: '19'},
  {label: 'Daerah Istimewah yogyakarta', value: '20'},
  {label: 'Jawa timur', value: '21'},
  {label: 'Bali', value: '22'},
  {label: 'Nuasa Tenggara Timur', value: '23'},
  {label: 'Nuasa Tenggara Barat', value: '24'},
  {label: 'Gorontalo', value: '25'},
  {label: 'Sulawesi Barat', value: '26'},
  {label: 'Sulawesi Tengah', value: '27'},
  {label: 'Sulawesi Utara', value: '28'},
  {label: 'Sulawesi Tenggara', value: '29'},
  {label: 'Sulawesi Selatan', value: '30'},
  {label: 'Maluku Utara', value: '31'},
  {label: 'Maluku ', value: '32'},
  {label: 'Papua Barat', value: '33'},
  {label: 'Papua ', value: '34'},
  {label: 'Papua Tengah', value: '35'},
  {label: 'Papua Pegunungan', value: '36'},
  {label: 'Papua Selatan', value: '37'},
  {label: 'Papua Barat Daya', value: '38'},
];

const Dropdowncomponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#4D4D4D'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        iconStyle={styles.image}
        itemTextStyle={styles.text}
        activeColor="rgba(0,0,0,0.26)"
        itemContainerStyle={styles.texts}
        containerStyle={styles.containerstyle}
        iconColor="#fff"
        labelField="label"
        valueField="value"
        placeholder={'Kota'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default Dropdowncomponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: '4%',
  },
  dropdown: {
    height: 60,
    width: '105%',
    borderColor: '#4D4D4D',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    top: '-8%',
  },
  placeholderStyle: {
    fontSize: 17,
    color: '#f2f2f2',
    left: '20%',
  },
  selectedTextStyle: {
    fontSize: 17,
    color: '#f2f2f2',
    left: '20%',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#f2f2f2',
    fontSize: 17,
  },
  texts: {
    backgroundColor: '#262626',
    width: '90%',
    left: '2%',
  },
  containerstyle: {
    backgroundColor: '#262626',
    marginTop: '2%',
    borderRadius: 10,
  },
});
