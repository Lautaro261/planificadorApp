import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar, // Importa StatusBar
  Alert
} from 'react-native';

import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import BudgetControl from './src/components/BudgetControl';

const App = () => {
  const [isValidBudget, setIsValidBudget] = useState(true) //cambiar a false
  StatusBar.setBackgroundColor('#3B82F6'); // Cambia el color aquí al que desees
  StatusBar.setBarStyle('light-content'); // Cambia el estilo de los iconos en la barra de notificaciones (light-content o dark-content)

  const handlerNewBudget = (budget)=>{
    console.log('Entre ! desde app', budget)
    if(Number(budget) > 0 ){
      console.log('valido')
      setIsValidBudget(true)
    }else{
      console.log('no valido!')
      Alert.alert('Error','El presupuesto debe ser igual o mayor a 1', [{text:'ok'}])
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isValidBudget? (
        <BudgetControl/>
        ) : (
        <NewBudget handlerNewBudget={handlerNewBudget}/>
        ) }

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#757575',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});

export default App;
