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
import {useGetExperienceInfoQuery} from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {selectWorkInfo, setWorkInfo} from '../../app/slice/profileSlice';
import {WorkInfo} from '../../app/types/profileInfo';
import moment from 'moment';

const WorkHistory = ({navigation}: any) => {
  const dispatch = useDispatch();

  const experienceInfo: WorkInfo = useSelector(selectWorkInfo);

  const {
    data: experienceInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetExperienceInfoQuery('');
  console.log('isLoading ' + isLoading);

  console.log(experienceInfoData);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      setData();
    }
  }, [isSuccess]);

  const setData = () => {
    dispatch(setWorkInfo(experienceInfoData?.result));
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
          <Text style={styles.headerText}>Work History</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            height: screenHeight * 1.1,
            width: screenWidth,
            marginTop: 20,
            padding: 20,
          }}>
            <Text style={{color: '#218FDC', fontSize: 14, marginBottom: 35}}>
            EXPERIENCE
          </Text>
          {experienceInfo && Object.values(experienceInfo).map((ele: any) => (
            <View
              style={{
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: 2,
                padding: 10,
              }}
              key={ele?.experienceId}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 9}}>
                {ele?.title}
              </Text>
              <Text style={{color: '#828282', fontSize: 15, marginBottom: 9}}>
                {ele?.companyName}
              </Text>
              <Text style={{color: '#828282', fontSize: 15}}>
                 {moment(`${ele?.startDate}`).format('MMM YYYY')} - {moment(`${ele?.endDate}`).format('MMM YYYY')}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkHistory;

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
