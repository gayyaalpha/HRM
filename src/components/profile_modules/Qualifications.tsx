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
import {useGetQualificationInfoQuery} from '../../app/api/profileApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import {QualificationInfo} from '../../app/types/profileInfo';
import {
  selectQualificationInfo,
  setQualificationInfo,
} from '../../app/slice/profileSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import moment from 'moment';

const Qualifications = ({navigation}: any) => {
  const dispatch = useDispatch();
  const qualificationInfo: QualificationInfo = useSelector(
    selectQualificationInfo,
  );
  const {
    data: qualificationInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetQualificationInfoQuery('');

  console.log('isLoading ' + isLoading);

  // console.log(certificationInfoData);

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
    dispatch(setQualificationInfo(qualificationInfoData?.result));
  };

  console.log(qualificationInfo?.certification);

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
        <View style={styles.headerTextSt}>
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
          <View style={styles.addNew}>
            <Text style={{flex: 2, color: '#218FDC', fontSize: 14}}>
              Licenses & Certifications
            </Text>
            <TouchableOpacity
              style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#115EA3', fontSize: 16}}>Add New</Text>
            </TouchableOpacity>
          </View>
          {qualificationInfo &&
            Object.values(qualificationInfo.certification).map((ele: any) => (
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
          <View style={styles.addNewB}>
            <Text style={{flex: 2, color: '#218FDC', fontSize: 14}}>
              Education
            </Text>
            <TouchableOpacity
              style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#115EA3', fontSize: 16}}>Add New</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: '#218FDC', fontSize: 14}}></Text>
          {qualificationInfo &&
            Object.values(qualificationInfo?.education).map((ele: any) => (
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
            <View style={styles.addNewB}>
            <Text style={{flex: 2, color: '#218FDC', fontSize: 14}}>
            Languages
            </Text>
            <TouchableOpacity
              style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#115EA3', fontSize: 16}}>Add New</Text>
            </TouchableOpacity>
          </View>
          
          {qualificationInfo &&
            Object.values(qualificationInfo?.language).map((ele: any) => (
              <View
                style={{
                  borderBottomColor: '#F2F2F2',
                  borderBottomWidth: 2,
                  padding: 20,
                }}
                key={ele?.id}>
                <Text style={{color: 'white', fontSize: 18, marginBottom: 9}}>
                  {ele?.name}{' '}
                </Text>
                <Text style={{color: '#828282'}}>{ele?.competency}</Text>
                <Text style={{color: '#828282'}}>{ele?.fluency}</Text>
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
  addNew: {
    flex: 1,
    justifyContent: 'space-between',
    width: screenWidth,
    marginBottom: 35,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addNewB: {
    flex: 1,
    justifyContent: 'space-between',
    width: screenWidth,
    marginVertical: 35,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  headerTextSt: {
    flex: 1,
    position: 'absolute',
  },
  headerIcon: {
    flex: 1,
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
