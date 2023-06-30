import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPaySlipsInfoQuery } from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import { selectPayslipInfo, setPayslipInfo } from '../../app/slice/profileSlice';
import moment from 'moment';
import { payslipInfo } from '../../app/types/profileInfo';

const Payslips = ({navigation}:any) => {

  const payslipInfo: payslipInfo = useSelector(selectPayslipInfo);
  const dispatch = useDispatch();

  const {
    data: payslipInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetPaySlipsInfoQuery('');
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
    dispatch(setPayslipInfo(payslipInfoData?.result));
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
        <Text style={styles.headerText}>PAY SLIPS</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          width: screenWidth,
          marginTop: 20,
          padding: 10,
        }}>
        {payslipInfo && Object.values(payslipInfo).map((ele: any) => (
          <View  key={ele?.id} style={{borderBottomColor: '#F2F2F2', borderBottomWidth: 2}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingBottom:10,
                alignContent:'center',
                alignItems:'center',
                paddingVertical:30
               
              }}>
              <View style={{flex: 12}}>
                <Text style={{color: '#fff', fontSize: 18 }}>
                  {moment(`${ele?.date}`).format('DD MMM YYYY')}
                </Text>
              </View>
              <View style={{alignSelf:'flex-end'}}>
                <FontAIcon name="chevron-right" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Payslips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
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