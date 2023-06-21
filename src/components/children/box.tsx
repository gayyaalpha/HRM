import {
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Button,
  } from 'react-native';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Box =(props:any)=>{
    
    return(

        <View style={styles.buttonStyleView}>
            <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress} >
                {props.children}
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Box

const styles = StyleSheet.create({
    containerCard:{
        backgroundColor:'#104682',
        width: screenWidth-20,
        display:'flex',
        flex:1,
        borderRadius: 8,
        marginBottom: 16,
    
       
    
    },
    buttonStyleView:{
        display:'flex',
        flex:1,
      
     
       

    },
    buttonContainer: {
        flex:1,
        backgroundColor:'#104682',
        margin:10,
        borderRadius: 15,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
      buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
      },
})