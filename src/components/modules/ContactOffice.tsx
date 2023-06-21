import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import List from '../children/list';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {selectContactInfo} from '../../app/slice/profileSlice';
import {ContactInfo} from '../../app/types/profileInfo';

const ContactOffice = ({navigation}: any) => {

  const contactInfo: ContactInfo = useSelector(selectContactInfo);

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity
            style={{flex: 1, padding: 10}}
            onPress={() => navigation.navigate('Contact Details')}>
            <FontAIcon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={styles.headerTextSt}>
          <Text style={styles.headerText}>OFFICE</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'space-between',
          width: screenWidth - 15,
        }}>
        <List title={'Phone'} content={contactInfo?.officePhoneNo} />
        <List title={'Fixed Line'} content={contactInfo?.officeFixedLine} />
        <List title={'Mobile Number'} content={contactInfo?.officeMobileNo} />
        <List title={'Default Address'} content={contactInfo?.officeDefaultAddress} />
        <View style={{flex:1, alignContent:'center',alignItems:'center', justifyContent: 'flex-start' , flexDirection:'row',padding:10}}>
          <Text style={{fontSize:16, color:'white'}}>Emergency contact</Text>
        </View>
        <List
          title={'Emergency contact name'}
          content={contactInfo?.emergencyContactName}
        />
        <List
          title={'Emergency contact address'}
          content={contactInfo?.emergencyContactAddress}
        />
        <List
          title={'Emergency contact number'}
          content={contactInfo?.emergencyContactName}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactOffice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  boxContainer: {
    flex: 1.5,
    flexDirection: 'row',
  },
  leaveBox: {
    flex: 1,
    backgroundColor: '#104682',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 21,
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  header: {
    height: 50,
    width: screenWidth,
    backgroundColor: '#104682',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  headerTextSt:{
    flex:1,
    position: 'absolute',
  },
  headerIcon:{
      flex:1,
      position: 'absolute',
      alignSelf: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
