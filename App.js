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
  Modal,
} from 'react-native';

import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import BudgetControl from './src/components/BudgetControl';
import Form from './src/components/Form';

const App = () => {
  const [isAvalidBudget, setIsAvalidBudget] = useState(true); //cambiar a false
  const [budget, setBudget] = useState(500);
  const [costs, setCosts] = useState([
    /* {id:1, quantity:30},
    {id:2, quantity:40},
    {id:3, quantity:50} */
  ]); // array de gastos (expenses)
  const [modalAvailable, setModalAvailable] = useState(false); //cambiar a false
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

  const handlerCosts = cost => {
    console.log(cost);
    if (Object.values(cost).includes('')) {
      console.log('falta che');
      Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
    } else {
      console.log('todo lleno');
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
        <Modal animationType="slide" visible={modalAvailable}>
          <Form
            modalAvailable={modalAvailable}
            setModalAvailable={setModalAvailable}
            handlerCosts={handlerCosts}
          />
        </Modal>
      )}

      {isAvalidBudget && (
        <View style={styles.ContainerImage}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              console.log('click', modalAvailable);
              setModalAvailable(!modalAvailable);
              console.log(modalAvailable);
            }}>
            {/* <Text>o</Text> */}
            <Image
              style={styles.image}
              source={require('./src/img/nuevo-gasto.png')}
            />
          </Pressable>
        </View>
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
  /* ContainerImage:{
    width:10,
    //height:80,
    position:'absolute',
    top:500,
    /* right:10 
  }, */
  btn: {
    //borderWidth: 5,
    //borderColor: 'red',
    position: 'absolute',
    top: 70,
    right: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default App;
