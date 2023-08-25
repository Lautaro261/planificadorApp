import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar, // Importa StatusBar
} from 'react-native';

import Header from './src/components/Header';


const App = () => {

  StatusBar.setBackgroundColor('#3B82F6'); // Cambia el color aquí al que desees
  StatusBar.setBarStyle('light-content'); // Cambia el estilo de los iconos en la barra de notificaciones (light-content o dark-content)

  return (
    <View style={styles.fondo}>
      <Header/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fondo:{
    backgroundColor:'#757575',
    flex:1
  }
});

export default App;
