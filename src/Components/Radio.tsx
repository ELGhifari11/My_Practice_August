import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

const Radio = () => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        borderColor: '#fff',
        color: '#fff',
      },
      {
        id: '2',
        borderColor: '#fff',
        color: '#fff',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      <RadioGroup
        containerStyle={styles.containerstyle}
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row"
      />
      <Text style={{color: '#fff', fontSize: 17, right: '510%'}}>
        Laki-Laki
      </Text>
      <Text style={{color: '#fff', fontSize: 17, right: '190%'}}>wanita</Text>
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '3%',
    left: '3%',
  },
  containerstyle: {
    gap: 130,
  },
});
