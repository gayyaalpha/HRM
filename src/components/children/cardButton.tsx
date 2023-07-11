import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const screenWidth = Dimensions.get('window').width;

const CardButton = (props:any) => {
  return (
    <View style={{height:200 , width:screenWidth }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.textColor}>REPORT AN ISSUE</Text>
            
        </TouchableOpacity>
      
    </View>
  )
}

export default CardButton

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#104682',
        display: 'flex',
        margin:10,
        borderRadius: 8,
        height:50,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'

    },
    textColor:{
        color:'#fff',
        fontSize:17,

    }

})