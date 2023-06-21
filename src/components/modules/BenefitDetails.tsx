import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useGetBenifitInfoQuery} from '../../app/api/profileApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {selectBenefitInfo, setBenefitInfo} from '../../app/slice/profileSlice';
import { BenefitInfo } from '../../app/types/profileInfo';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BenefitDetails = ({navigation}:any) => {
  const benefitInfo: BenefitInfo = useSelector(selectBenefitInfo);
  const dispatch = useDispatch();
  const {
    data: benefitInfoData,
    error,
    isLoading,
    isSuccess,
  } = useGetBenifitInfoQuery('');
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
    dispatch(setBenefitInfo(benefitInfoData?.result));
  };
  console.log(benefitInfo);

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
        <Text style={styles.headerText}>BENEFITS</Text>
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
          padding: 20,
        }}>
        <Text style={{color: '#218FDC', fontSize: 14, marginBottom: 35}}>
          POLICIES
        </Text>
        {Object.values(benefitInfo).map((ele: any) => (
          <View  key={ele?.id} style={{borderBottomColor: '#F2F2F2', borderBottomWidth: 2 ,marginVertical:15}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingBottom:10,
                alignContent:'center',
                alignItems:'center'
              }}>
              <View style={{flex: 12}}>
                <Text style={{color: 'white', fontSize: 18}}>
                  {ele?.benefitName}
                </Text>
                <Text style={{color: '#828282', fontSize: 15 }}>
                  Effected From {moment(`${ele?.date}`).format('MMM YYYY')}
                </Text>
              </View>
              <View style={{flex: 1}}>
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

export default BenefitDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#08254D',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
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
