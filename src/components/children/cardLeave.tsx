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
import FontAIcon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CardLeave = (props: any) => {
  return (
    <TouchableOpacity style={styles.containerCardLeave}>
      <View style={{flex: 10}}>
        <View style={{flex: 1, padding: 10}}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={styles.subContainer}>
            <Text style={styles.valText}>{props.val1}</Text>
            <Text style={styles.sText}>{props.s1}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.valTextSub}>{props.val2}</Text>
            <Text style={styles.sText}>{props.s2}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.valTextSub}>{props.val3}</Text>
            <Text style={styles.sText}>{props.s3}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <FontAIcon name="chevron-right" size={27} color="white" />
      </View>
    </TouchableOpacity>
  );
};
export default CardLeave;

const styles = StyleSheet.create({
  containerCardLeave: {
    backgroundColor: '#104682',
    display: 'flex',
    flex: 1,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    padding:15
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
