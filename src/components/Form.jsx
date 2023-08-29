import React from "react";
import { 
    View,
    Text,
    Pressable,
    StyleSheet,
    TextInput
 } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles";

 const Form = ()=>{

    return(
        <View style={styles.container}>

        <View>
            <Pressable>
                <Text>Cancelar</Text>
            </Pressable>

        </View>

        <View style={styles.form}>
            <Text style={styles.title}>Nuevo Gato</Text>
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                placeholder="Ej.: Comida"
                style={styles.input}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad</Text>
                <TextInput
                placeholder="Ej.: $400"
                keyboardType="numeric"
                style={styles.input}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Categoria de Gastos</Text>
                <Picker style={styles.input}>
                    <Picker.Item label="-- Seleccione --" value=''/>
                    <Picker.Item label="Ahorro" value='saving'/>
                    <Picker.Item label="Comida" value='food'/>
                    <Picker.Item label="Casa" value='home'/>
                    <Picker.Item label="Ocio" value='recreation'/>
                    <Picker.Item label="Suscripciones" value='subscriptions'/>
                    <Picker.Item label="Salud" value='health'/>
                    <Picker.Item label="Varios" value='divers'/>
                </Picker>
            </View>

            <Pressable style={styles.submitBtn}>
                <Text style={styles.submitText}>Agregar Gasto</Text>
            </Pressable>
        </View>

        

        </View>
    )
 }
 
 const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1E40AF',
        flex:1
    },
    form:{
        ...globalStyles.container
    },
    title:{
        textAlign:'center',
        fontSize:20,
        marginVertical: 25,
        color:'#64748B'
    },
    campo:{
        marginVertical:10
    },
    label:{
        color:'#64748B',
        textTransform:'uppercase',
        fontSize:14,
        fontWeight:'600'
    },
    input:{
        backgroundColor:'#F5F5F5',
        padding:10,
        borderRadius:10,
        marginTop:10,
    }


 })
 export default Form;