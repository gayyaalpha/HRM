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
import {useDispatch, useSelector} from 'react-redux';
import {JobInfo} from '../../app/types/profileInfo';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {useGetJobInfoQuery} from '../../app/api/profileApiSlice';
import { selectJobInfo, setJobInfo } from '../../app/slice/profileSlice';

const JobDetails = ({navigation}: any) => {
  const dispatch = useDispatch();

  const jobInfo: JobInfo = useSelector(selectJobInfo);

  const {
    data: jobInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetJobInfoQuery('');
  console.log('isLoading ' + isLoading);

  console.log(jobInfoData);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      setJobData();
    }
  }, [isSuccess]);

  const setJobData = () => {
    dispatch(setJobInfo(jobInfoData?.result));
  };

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
          <Text style={styles.headerText}>JOB DETAILS</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flex: 0.5, width: screenWidth - 20}}>
        <List title={'EPF No'} content={jobInfo?.epfNo} />
        <List title={'Occupation classification'} content={jobInfo.occupationClassification} />
        <List title={'Employee Grade'} content={jobInfo.employeeGrade} />
        <List title={'Employee Grade'} content={jobInfo.employeeNo} />
        <List title={'Service type'} content={jobInfo.serviceType} />
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;

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
