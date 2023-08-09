import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../Router/Index';
import Radio from '../../Components/Radio';
import Dropdowncomponent from '../../Components/DropdownItems';

const Register = () => {
  const [value, setValue] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ScrollView
      style={{backgroundColor: '#000'}}
      alwaysBounceVertical
      indicatorStyle="white">
      <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} translucent />
        <Image
          source={require('../../../assets/images/TopLineSplash3.png')}
          style={{width: '100%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            top: '-35%',
          }}>
          <Image
            source={require('../../../assets/images/LogopitRegister.png')}
            style={{width: 130, height: 130, left: '7%', top: '-5%'}}
          />
          <Image
            source={require('../../../assets/images/LogoFontBankPit.png')}
            style={{top: '-4.5%', right: '18%'}}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('WelcomeSplash3')}>
          <View style={styles.panah}>
            <Image
              source={require('../../../assets/images/IconBack.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: '-39%',
            marginRight: '48%',
          }}>
          Informasi Pribadi
        </Text>
        <TextInput
          value={value}
          inputStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          labelStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          label="Nama Depan"
          placeholderStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          placeholderTextColor={'#f7f7f7'}
          style={{
            backgroundColor: '#262626',
            borderColor: '#4D4D4D',
            paddingLeft: '4%',
            borderRadius: 10,
            borderWidth: 1,
            width: '90%',
            height: 60,
            marginTop: '3%',
          }}
        />
        <TextInput
          value={value}
          inputStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          labelStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          label="Nama Belakang"
          placeholderStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          placeholderTextColor={'#f7f7f7'}
          style={{
            backgroundColor: '#262626',
            borderColor: '#4D4D4D',
            paddingLeft: '4%',
            borderRadius: 10,
            borderWidth: 1,
            width: '90%',
            height: 60,
            marginTop: '3%',
          }}
        />
        <Radio />
        <TextInput
          value={value}
          inputStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          labelStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          label="Nomor Telepon"
          placeholderStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          keyboardType="numeric"
          placeholderTextColor={'#f7f7f7'}
          style={{
            backgroundColor: '#262626',
            borderColor: '#4D4D4D',
            paddingLeft: '4%',
            borderRadius: 10,
            borderWidth: 1,
            width: '90%',
            height: 60,
            marginTop: '6%',
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            marginRight: '36%',
            marginTop: '5%',
          }}>
          Tempat Tanggal Lahir
        </Text>
        <TextInput
          value={value}
          inputStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          labelStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          label="Tempat Lahir"
          placeholderStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          placeholderTextColor={'#f7f7f7'}
          style={{
            backgroundColor: '#262626',
            borderColor: '#4D4D4D',
            paddingLeft: '4%',
            borderRadius: 10,
            borderWidth: 1,
            width: '90%',
            height: 60,
            marginTop: '3%',
          }}
        />
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <TextInput
            value={value}
            inputStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            labelStyle={{
              fontSize: 12,
              color: '#fff',
            }}
            label="Hari"
            placeholderStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            keyboardType="numeric"
            placeholderTextColor={'#f7f7f7'}
            style={{
              backgroundColor: '#262626',
              borderColor: '#4D4D4D',
              paddingLeft: '4%',
              borderRadius: 10,
              borderWidth: 1,
              width: '44%',
              height: 60,
              marginTop: '3%',
            }}
          />
          <TextInput
            value={value}
            inputStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            labelStyle={{
              fontSize: 12,
              color: '#fff',
            }}
            label="Bulan"
            placeholderStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            keyboardType="numeric"
            placeholderTextColor={'#f7f7f7'}
            style={{
              backgroundColor: '#262626',
              borderColor: '#4D4D4D',
              paddingLeft: '4%',
              borderRadius: 10,
              borderWidth: 1,
              width: '44%',
              height: 60,
              marginTop: '3%',
            }}
          />
        </View>
        <TextInput
          value={value}
          inputStyle={{
            fontSize: 16,
            color: '#fff',
            marginHorizontal: '10%',
          }}
          labelStyle={{
            fontSize: 12,
            color: '#fff',
          }}
          label="Tempat Lahir"
          placeholderStyle={{
            fontSize: 16,
            color: '#fff',
          }}
          placeholderTextColor={'#f7f7f7'}
          style={{
            backgroundColor: '#262626',
            borderColor: '#4D4D4D',
            paddingLeft: '4%',
            borderRadius: 10,
            borderWidth: 1,
            width: '90%',
            height: 60,
            marginTop: '3%',
          }}
        />

        {/* /////////////////////////////////////////////////////////////////////// */}
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              top: '10%',
              marginRight: '48%',
            }}>
            Alamat Tinggal
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '400',
              top: '15%',
            }}>
            Masukkan alamat tinggal yang sesuai dengan yang tertera pada kartu
            identitas anda.
          </Text>

          <View style={{top: '15%', left: '-3%'}}>
            <Dropdowncomponent />
            <Dropdowncomponent />
          </View>

          <TextInput
            value={value}
            inputStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            labelStyle={{
              fontSize: 12,
              color: '#fff',
            }}
            label="Alamat Lengkap"
            placeholderStyle={{
              fontSize: 16,
              color: '#fff',
            }}
            placeholderTextColor={'#f7f7f7'}
            style={{
              backgroundColor: '#262626',
              borderColor: '#4D4D4D',
              paddingLeft: '4%',
              borderRadius: 10,
              borderWidth: 1,
              width: '90%',
              height: 60,
              marginTop: '1%',
              top: 50,
              marginLeft: 3,
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 390,
            height: 55,
            backgroundColor: '#fff500',
            borderRadius: 50,
            alignItems: 'center',
            marginTop: '20%',
            paddingTop: '3%',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Lanjutkan
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  panah: {
    width: 35,
    height: 35,
    marginRight: '84%',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-52%',
  },
  image: {
    width: 17,
    height: 17,
  },
  inputStyle: {
    fontSize: 17,
    borderWidth: 2,
    borderColor: '#4D4D4D',
    backgroundColor: '#262626',
    width: '90%',
    left: '1%',
    borderRadius: 10,
    paddingLeft: '4%',
    color: '#ffff',
    top: 50,
  },
});
