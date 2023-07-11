import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../json_form/constants/colors';
import FontAIcon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const CardIssue = (props: any) => {
  return (
    <View
      style={{
        height: 150,
        marginBottom: 20,     
        width: screenWidth ,
       
      }}>
      <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
        <View
          style={{
            flex: 3,
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.fontTitle}>{props.machine}</Text>
          <Text style={styles.fontContent}>Location/Department : {props.department}</Text>
          <Text style={styles.fontContent}>Category : {props.category}</Text>
          <Text style={styles.fontContent}>Assignee : {props.userName}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}>
          <FontAIcon
            name="alert-circle-outline"
            size={34}
            color={props.priority=='Low'?'#fff':props.priority=='Medium'?'#FFE500':props.priority=='High'?'red':'#fff'}
          />
          <Text style={styles.fontTitle}>#{props.id}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardIssue;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#104682',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal:10,
    borderRadius: 8,
   
  },
  fontContent: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  fontTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
