import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={style.texts}>Panificador de Gastos</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  texts: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '400',
    paddingTop: 20,
  },
});

export default Header;
