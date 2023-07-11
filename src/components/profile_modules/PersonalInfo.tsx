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
import FontAIcon5 from 'react-native-vector-icons/FontAwesome5';
import {useGetPersonalInfoQuery} from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {useDispatch, useSelector} from 'react-redux';
import {selectProfileInfo, setProfileInfo} from '../../app/slice/profileSlice';
import {ProfileInfo} from '../../app/types/profileInfo';

const PersonalInfo = ({navigation}: any) => {
  const dispatch = useDispatch();
  const personalInfo: ProfileInfo = useSelector(selectProfileInfo);

  const {
    data: personalInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetPersonalInfoQuery('');
  console.log('isLoading ' + isLoading);

  console.log(personalInfoData);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      setPersonalData();
    }
  }, [isSuccess]);

  const setPersonalData = () => {
    dispatch(setProfileInfo(personalInfoData?.result));
  };

  console.log(personalInfo?.civilStatus);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={styles.headerIcon}>
          <TouchableOpacity
            style={{padding:10}}
            onPress={() => navigation.navigate('profile')}>
            <FontAIcon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={styles.headerTextSt}>
          <Text style={styles.headerText}>PERSONAL INFORMATION</Text>
        </View>
        <View
          style={styles.headerIconEdit}>
          <TouchableOpacity
            style={{padding:10}}
            onPress={() => navigation.navigate('Personal Info Form')}>
            <FontAIcon5 name="pen" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            height: screenHeight * 1.1,
            width: screenWidth - 15,
            marginTop: 20,
          }}>
          <List
            title={'Name With Initials'}
            content={personalInfo?.nameWithInitial}
          />
          <List title={'Full Name'} content={personalInfo?.fullName} />
          <List title={'Employee No'} content={personalInfo?.employeeNo} />
          <List title={'EPF No'} content={personalInfo?.epfNo} />
          <List title={'NIC No'} content={personalInfo?.nicNo} />
          <List title={'Passport No'} content={personalInfo?.passportNo} />
          <List
            title={'Driving Licence No'}
            content={personalInfo?.drivingLicenseNo}
          />
          <List title={'Civil Status'} content={personalInfo?.civilStatus} />
          <List title={'Nationality'} content={personalInfo?.nationality} />
          <List title={'Country'} content={personalInfo?.country} />
          <List title={'Gender'} content={personalInfo?.gender} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
  headerIconEdit:{
    flex:1,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
}
});
