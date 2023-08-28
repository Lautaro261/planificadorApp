import React from "react"
import { 
    View,
    Text,
    StyleSheet,
    Image
 } from "react-native"


const BudgetControl = ()=>{

    return(
        <View>
            <View>
                <Image source={require('../img/grafico.jpg')}/>
            </View>
        </View>
    )
} 

const style = StyleSheet.create({

})

export default BudgetControl;