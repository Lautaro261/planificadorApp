import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';

const NewBudget = () => {
  return (
    <View style={style.container}>
      <Text>Definir Presupuesto</Text>

      <TextInput />

      <Pressable>
        <Text>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 18,
    transform: [{translateY: 50}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default NewBudget;
