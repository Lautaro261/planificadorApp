import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

const BudgetControl = ({budget}) => {
  const [availableAmount, setAvailableAmount] = useState(0);
  const [expenses, setExponses] = useState(0);

  return (
    <View style={style.container}>
      <View style={style.center}>
        <Image style={style.image} source={require('../img/grafico.jpg')} />
      </View>

      <View style={style.textContainer}>
        {/* PRESUPUETO */}
        <Text style={style.value}>
          <Text style={style.label}>Presupuesto: </Text>
          {formatearCantidad(budget)}
        </Text>
        {/* DISPONIBLE */}
        <Text style={style.value}>
          <Text style={style.label}>Disponible: </Text>
          {formatearCantidad(budget)}
        </Text>
        {/* GASTADO */}
        <Text style={style.value}>
          <Text style={style.label}>Gastado: </Text>
          {formatearCantidad(budget)}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  center: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginTop: 50,
  },
  value: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    color: '#3B82F6',
  },
});

export default BudgetControl;
