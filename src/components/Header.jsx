import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";


const Header = () =>{

    return(
        <SafeAreaView style={style.header}>
            <Text style={style.textos}>Panificador de Gastos</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{
        backgroundColor:'#3B82F6',

    },
    textos:{
        textAlign:'center',
        fontSize: 20,
        color:'#FFF',
        textTransform:'uppercase',
        fontWeight:'400',
        paddingVertical:20

    }

})


export default Header;