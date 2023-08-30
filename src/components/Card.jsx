import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

const diccionaryIcons = {
  saving: require('../img/icono_ahorro.png'),
  food: require('../img/icono_comida.png'),
  home: require('../img/icono_casa.png'),
  subscriptions: require('../img/icono_suscripciones.png'),
  health: require('../img/icono_salud.png'),
  recreation: require('../img/icono_ocio.png'),
  divers: require('../img/icono_gastos.png'),
};

const Card = ({cost}) => {
  const {name, category, id, quantity} = cost;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image style={styles.image} source={diccionaryIcons[category]} />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.quantity}>{formatearCantidad(quantity)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentImage: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  containerText: {
    flex: 1,
    /* backgroundColor:'red' */
  },
  category: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 20,
    fontWeight: '600',
    color: '#242424',
  },
});

export default Card;
