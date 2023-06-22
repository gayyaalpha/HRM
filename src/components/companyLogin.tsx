import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCompanySelectMutation} from '../app/api/tenantApiSlice';
import {setTenant, setBaseUrl, selectTenant} from '../app/slice/tenantSlice';
import {setArrayToLocalStorage, setToLocalStorage} from '../app/utils/helpers';
import useDidUpdate from '../app/hooks/useDidUpdate';
import {Tenant} from '../app/types/tenant';
import {BASE_URL, BASE_URL_API_PATH, BASE_URL_PROTOCOL} from '@env';
import {Controller, useForm} from 'react-hook-form';

const screen = Dimensions.get('screen');
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const CompanyLogin = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [userHandle, {data: tenantData, isError, isLoading, isSuccess, error}] =
    useCompanySelectMutation();
  console.log(BASE_URL);

  // const [companyName, setCompanyName] = useState('');
  // const [companySubmit, setCompanySubmit] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      companyName: ''
    },
  });

  // const { data: tenantData, isLoading, isSuccess } = useLoginQuery(companySubmit);

  console.log(tenantData);
  console.log('isSucess' + isSuccess);

  const tenant: Tenant = useSelector(selectTenant);

  // useEffect(() => {
  //   if()
  //   navigation.navigate('User Login')
  // }, [error]);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set tenent data');
      setTenantData();
    }
  }, [isSuccess]);

  const getBaseUrlFromTenant = (tenantData: any) => {
    if (tenantData?.result?.host) {
      console.log('working getabseurlfrom tenent');
      return BASE_URL_PROTOCOL + tenantData?.result?.host + BASE_URL_API_PATH;
    } else {
      return BASE_URL;
    }
  };

  const setTenantData = () => {
    setArrayToLocalStorage('tenant', tenantData?.result);

    setToLocalStorage('baseUrl', getBaseUrlFromTenant(tenantData));

    dispatch(setTenant(tenantData?.result));

    dispatch(setBaseUrl({baseUrl: getBaseUrlFromTenant(tenantData)}));

    navigation.navigate('User Login');
  };



  const handleProceed = async (e: any) => {
    // e.preventDefault();
    try {
      // if (companyName.trim() === '') {
      //   console.error('Enter company name');

      //   return;
      // }
      // setCompanyName(e.companyName)
      // setCompanySubmit(e.companyName);
      // console.log(companySubmit);
      // {userHandle}
      userHandle(e.companyName);
      console.log(e.companyName)
    } catch (err: any) {
      console.log({err});

      if (err?.data?.errors) {
        console.log('errors', err?.data?.errors?.id);

        // toast.error(err?.data?.errors?.id.join(', '));
      }
    }
  };

  // setWindowClass('hold-transition login-page');

  const onSubmit = (e:any) => console.log(e?.companyName)

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flex: 3}}>
                <Image source={require('../images/img_logo/logo.png')} />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  LOGIN
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flex: 3}}>
                <View style={{alignSelf: 'flex-start'}}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    Company name
                  </Text>
                </View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={styles.inputSt}
                    />
                  )}
                  name="companyName"
                />
                  {errors.companyName && <Text>This is required.</Text>}
                {/* <TextInput
                  style={styles.inputSt}
                  onChangeText={text => setCompanyName(text)}>
                </TextInput> */}
                <AppButton
                  title={'Proceed'}
                  onPress={handleSubmit(handleProceed)}></AppButton>
              </View>
              <View style={{flex: 1}}>
                <ForgetPassword
                  title={'Forgot Password'}
                  onPress={() => console.log('Forgot')}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 120,
    width: 120,
    margin: 4,
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: screen.width * 0.8,
  },
  inputSt: {
    width: screen.width * 0.8,
    height: 44,
    // margin: 400,
    borderWidth: 2,
    borderColor: '#fff',
    // padding: 10,
    marginBottom: 10,
  },

  square: {
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
  squareNew: {
    width: 100,
    height: 100,
    margin: 4,
  },
  textLogo: {
    color: '#fff',
    width: screen.width * 0.2,
    height: 30,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft: 30,
  },
  textCn: {
    color: '#fff',
    width: 200,
    height: 25,
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: screen.width * 0.1,
  },
  textLoginCn: {
    color: '#fff',
    width: 200,
    height: 30,
    fontSize: 14,
    alignSelf: 'center',
    paddingLeft: screen.width * 0.1,
  },
  textLoginCnName: {
    color: '#fff',
    width: 300,
    height: 30,
    fontSize: 22,
    alignSelf: 'center',
    paddingLeft: screen.width * 0.1,
    marginBottom: 40,
  },
  appButtonContainer: {
    width: screen.width * 0.8,
    height: 50,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 12
  },
  appButtonText: {
    marginTop: 10,
    fontSize: 18,
    color: '#0F75BC',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  forgotContainer: {
    marginTop: 20,
    width: screen.width * 0.3,
    height: 50,
    // paddingLeft: screen.width * 0.2,

    // paddingVertical: 10,
    // paddingHorizontal: 12
  },
  forgotText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const AppButton = ({onPress, title}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ForgetPassword = ({onPress, title}: any) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.forgotText}>{title}</Text>
  </TouchableOpacity>
);

export default CompanyLogin;
