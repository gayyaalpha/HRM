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

const LeaveBox = (props: any) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.leaveBox}>
        <Text style={styles.leaveText}>{props.title}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={styles.leaveNum}>{props.topNum}/</Text>
          <Text style={{color: 'white', paddingLeft: 5}}>{props.bottomNum}</Text>
        </View>
      </View>
    </View>
  );
};
export default LeaveBox;

const styles = StyleSheet.create({
  leaveBox: {
    flex: 1,
    backgroundColor: '#104682',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  leaveText: {
    color: 'white',
    fontSize: 12,
    alignContent: 'center',
  },
  leaveNum: {
    color: 'white',
    fontSize: 36,
    alignContent: 'center',
  },
});
