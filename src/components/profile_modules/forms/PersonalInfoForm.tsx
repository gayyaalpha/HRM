import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {usePersonalInfoEditQuery} from '../api/formApiSlice';
import useDidUpdate from '../../../app/hooks/useDidUpdate';
import Form from '../../../Form';
import data from '../../../../form.json';
import {useDispatch, useSelector} from 'react-redux';
import {selectProfileInfoForm, setProfileForm} from '../reducers/formSlice';
import {ProfileInfoForm} from '../../../app/types/profileForm';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const PersonalInfoForm = ({navigation}: any) => {
  const personalInfoForm: ProfileInfoForm = useSelector(selectProfileInfoForm);
  const dispatch = useDispatch();

  const {
    data: personalInfoFormData,
    error,
    isLoading,
    isSuccess = false,
  } = usePersonalInfoEditQuery('');

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      console.log();
      setFormData();
    }
  }, [isSuccess]);

  const setFormData = () => {
    dispatch(setProfileForm(personalInfoFormData?.result));
  };

  const onSubmit = () => {
    console.log('data');
  };

  const convertJson = (itemName: string) => {
    try {
      return JSON.parse(itemName);
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };



    // Check if the personalInfoForm data is available in the Redux store
    if (!personalInfoForm) {
      return null; // or render a loading spinner or placeholder content
    }
    
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('Personal Info')}>
            <FontAIcon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTextSt}>
          <Text style={styles.headerText}>EDIT PERSONAL INFORMATION</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
         {personalInfoForm && <Form json={convertJson(personalInfoForm?.json)} onSubmit={onSubmit} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfoForm;

const styles = StyleSheet.create({
  scrollContainer: {
    width:screenWidth,
    flex:1,
    // backgroundColor: '#08254D',
   
    // flex: 1,
  },
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
  headerIconEdit: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
