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
import {useGetContactInfoQuery} from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {useDispatch} from 'react-redux';
import {setContactInfo} from '../../app/slice/profileSlice';

const ContactDetails = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {
    data: contactInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetContactInfoQuery('');

  console.log('isLoading ' + isLoading);
  console.log('isSuccess ' + isSuccess);
  console.log(contactInfoData);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  const setPersonalData = () => {
    dispatch(setContactInfo(contactInfoData?.result));
  };
  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      setPersonalData();
    }
  }, [isSuccess]);

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
          <Text style={styles.headerText}>CONTACT DETAILS</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          height: screenHeight,
          width: screenWidth,
          marginTop: 20,
          backgroundColor: '#08254D',
        }}>
        <View style={{flex: 0.26, alignContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => navigation.navigate('Contact Office')}>
            <View style={{flex: 1}}>
              <Text style={{color: '#3E3E3E', fontSize: 17}}>OFFICE</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <FontAIcon name="chevron-right" size={27} color="#5F5F5F" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => navigation.navigate('Contact Home')}>
            <View style={{flex: 1}}>
              <Text style={{color: '#3E3E3E', fontSize: 17}}>HOME</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <FontAIcon name="chevron-right" size={27} color="#5F5F5F" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
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
