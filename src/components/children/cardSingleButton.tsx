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

const CardSingleButton = (props: any) => {
  return (
    <View style={styles.containerCard}>
      <View style={{flex: 1, padding: 15}}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={styles.subContainer}>
          <Text style={styles.valText}>{props.val1}</Text>
          <Text style={styles.sText}>{props.s1}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.valTextSubMP}>{props.val2}</Text>
          <Text style={styles.sText}>{props.s2}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.valTextSub}>{props.val3}</Text>
          <Text style={styles.sText}>{props.s3}</Text>
        </View>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={styles.buttonStyleView}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.onPress}>
            <Text style={styles.buttonText}>VIEW ISSUES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CardSingleButton;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#104682',
    display: 'flex',
    flex: 1,
    borderRadius: 8,
    marginBottom: 16,
    margin:10,
  },
  buttonStyleView: {
    flex: 1,
    margin: 10,
  },
  buttonStyleApply: {
    flex: 1,
    margin: 10,
  },
  buttonContainer: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00A3FF',
    backgroundColor: 'transparent',
  },
  buttonContainerApply: {
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#00A3FF',
  },
  buttonText: {
    color: '#00A3FF',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonTextApply: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  valText: {
    color: '#FF0D0D',
    fontSize: 35,
    textAlign: 'left',
    paddingRight: 5,
  },
  valTextSub: {
    color: 'white',
    fontSize: 35,
    textAlign: 'left',
    paddingRight: 5,
  },
  valTextSubMP: {
    color: 'yellow',
    fontSize: 35,
    textAlign: 'left',
    paddingRight: 5,
  },
  sText: {
    color: 'white',
    fontSize: 11,
    textAlign: 'left',
    paddingRight: 20,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
