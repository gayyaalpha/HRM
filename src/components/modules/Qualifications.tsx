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
import {
  useGetEducationInfoQuery,
  useGetQualificationInfoQuery,
} from '../../app/api/profileApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import {CertificationInfo, EducationInfo} from '../../app/types/profileInfo';
import {
  selectCertificationInfo,
  selectEducationInfo,
  setCertificationInfo,
  setEducationInfo,
} from '../../app/slice/profileSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import moment from 'moment';

const Qualifications = ({navigation}: any) => {
  const dispatch = useDispatch();
  const certificationInfo: CertificationInfo = useSelector(
    selectCertificationInfo,
  );
  const educationInfo: EducationInfo = useSelector(selectEducationInfo);
  const {
    data: certificationInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetQualificationInfoQuery('');

  const {
    data: educationInfoData,
    error: error2,
    isLoading: isLoading2,
    isSuccess: isSuccess2,
  } = useGetEducationInfoQuery('');

  console.log('isLoading ' + isLoading);

  // console.log(certificationInfoData);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useDidUpdate(() => {
    if (isSuccess && isSuccess2) {
      console.log('set tenent data');
      setData();
    }
  }, [isSuccess && isSuccess2]);

  const setData = () => {
    dispatch(setCertificationInfo(certificationInfoData?.result));
    dispatch(setEducationInfo(educationInfoData?.result));
  };

  console.log(certificationInfo);

  console.log(educationInfo);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity
            style={{flex: 1, padding: 10}}
            onPress={() => navigation.navigate('profile')}>
            <FontAIcon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={styles.headerTextSt}>
          <Text style={styles.headerText}>QUALIFICATIONS</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            padding: 15,
            width: screenWidth,
          }}>
          <Text style={{color: '#218FDC', fontSize: 14, marginBottom: 35}}>
            Licenses & Certifications
          </Text>
          {Object.values(certificationInfo).map((ele: any) => (
            <View
              style={{
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: 2,
                padding: 20,
              }}
              key={ele?.certificationsId}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 9}}>
                {ele?.certificationName}{' '}
              </Text>
              <Text style={{color: '#828282'}}>
                Issued {moment(`${ele?.issuedDate}`).format('MMM YYYY')}{' '}
              </Text>
            </View>
          ))}
          <Text style={{color: '#218FDC', fontSize: 14, marginVertical: 35}}>
            Education
          </Text>
          {Object.values(educationInfo).map((ele: any) => (
            <View
              style={{
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: 2,
                padding: 20,
              }}
              key={ele?.id}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 9}}>
                {ele?.school}{' '}
              </Text>
              <Text style={{color: '#828282'}}>
                Issued {moment(`${ele?.startDate}`).format('MMM YYYY')}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Qualifications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
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
