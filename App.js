import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar, // Importa StatusBar
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';

import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import BudgetControl from './src/components/BudgetControl';
import Form from './src/components/Form';

const App = () => {
  const [isAvalidBudget, setIsAvalidBudget] = useState(true); //cambiar a false
  const [budget, setBudget] = useState(500);
  const [costs, setCosts] = useState([
    {id:1, quantity:30},
    {id:2, quantity:40},
    {id:3, quantity:50}
  ]) // array de gastos (expenses)
  const [modalAvailable, setModalAvailable] = useState(true); //cambiar a false
  StatusBar.setBackgroundColor('#3B82F6'); // Cambia el color aquí al que desees
  StatusBar.setBarStyle('light-content'); // Cambia el estilo de los iconos en la barra de notificaciones (light-content o dark-content)

  const handlerNewBudget = budget => {
    console.log('Entre ! desde app', budget);
    if (Number(budget) > 0) {
      console.log('valido');
      setIsAvalidBudget(true);
    } else {
      console.log('no valido!');
      Alert.alert('Error', 'El presupuesto debe ser igual o mayor a 1', [
        {text: 'ok'},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isAvalidBudget ? (
          <BudgetControl costs={costs} budget={budget} />
        ) : (
          <NewBudget
            budget={budget}
            setBudget={setBudget}
            handlerNewBudget={handlerNewBudget}
          />
        )}
      </View>

      {modalAvailable && (
        <Modal 
        animationType='slide'
        visible={modalAvailable}
        > 
        <Form/>

        </Modal>
      )}

      {isAvalidBudget && (
        <Pressable onPress={()=>{setModalAvailable(!modalAvailable)}}>
          <Image style={styles.image} source={require('./src/img/nuevo-gasto.png')}/>
        </Pressable>
      )}
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
  image:{
    width:60,
    height:60,
    position:'absolute',
    top:200,
    right:20
  }
});

export default App;
