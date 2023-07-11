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
import {useGetAccountInfoQuery} from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {useDispatch, useSelector} from 'react-redux';
import {selectBankInfo, setBankInfo} from '../../app/slice/profileSlice';
import {BankInfo} from '../../app/types/profileInfo';
import FontAIcon5 from 'react-native-vector-icons/FontAwesome5';

const BankDetails = ({navigation}: any) => {
  const dispatch = useDispatch();
  const bankInfo: BankInfo = useSelector(selectBankInfo);

  const {
    data: bankInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetAccountInfoQuery('');
  console.log('isLoading ' + isLoading);

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
    dispatch(setBankInfo(bankInfoData?.result));
  };

  console.log(bankInfo);

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
          <Text style={styles.headerText}>BANK DETAILS</Text>
        </View>
        <View style={styles.headerIconEdit}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('Bank Details Form')}>
            <FontAIcon5 name="pen" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 15,
          marginTop: 20,
          borderBottomColor: '#F2F2F2',
          borderBottomWidth: 1,
          width: screenWidth,
        }}>
        <Text style={{color: '#218FDC', fontSize: 14, marginBottom: 15}}>
          ACCOUNT DETAILS
        </Text>
        <Text style={{color: 'white', fontSize: 18}}>
          {bankInfo?.accountNumber}
        </Text>
        <Text style={{color: '#828282', fontSize: 15}}>
          {bankInfo?.bankName}
        </Text>
        <Text style={{color: '#828282', fontSize: 15}}>
          {bankInfo?.branchName}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'flex-start',
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
  headerIconEdit: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
