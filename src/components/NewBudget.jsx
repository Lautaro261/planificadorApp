import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import globalStyles from '../styles';

const NewBudget = ({handlerNewBudget, budget, setBudget}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>Definir Presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Monto $ "
        style={style.input}
        value={budget.toString()}
        onChangeText={setBudget}
      />

      <Pressable
        onPress={() => {
          handlerNewBudget(budget);
        }}
        style={style.button}>
        <Text style={style.buttonText}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    color: '#3B82F6',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default NewBudget;
