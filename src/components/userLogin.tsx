import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Tenant} from '../app/types/tenant';
import {useDispatch, useSelector} from 'react-redux';
import {selectTenant} from '../app/slice/tenantSlice';
import {useGetAuthenticateMutation} from '../app/api/authApiSlice';
import {selectUser, setToken, setUser} from '../app/slice/authSlice';
import {User} from '../app/types/user';
import useDidUpdate from '../app/hooks/useDidUpdate';
import {setArrayToLocalStorage, setToLocalStorage} from '../app/utils/helpers';
import {Controller, useForm} from 'react-hook-form';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const screen = Dimensions.get('screen');

const UserLogin = ({navigation}: any) => {
  const dispatch = useDispatch();
  const tenant: Tenant = useSelector(selectTenant);
  // const user: User = useSelector(selectUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [getUser, {data: userData, isLoading, isSuccess, error}] =
    useGetAuthenticateMutation();
  // console.log('isLoading :' + isLoading);
  console.log(userData);

  useEffect(() => {
    console.log('error : ' + {error});
  }, [error]);
  useDidUpdate(() => {
    if (isSuccess) {
      setUserData();
      console.log('isSucess: ' + isSuccess);
    }
  }, [isSuccess]);
  const setUserData = () => {
    // console.log({userData});
    setArrayToLocalStorage('user', userData?.appUser);
    setToLocalStorage('access_Token', userData?.access_Token);
    dispatch(setToken(userData?.access_Token));
    dispatch(setUser(userData?.appUser));

    // navigation.navigate('Home Screen')
  };
  const handleProceed = async (e: any) => {
    // e.preventDefault();
    try {
      console.log(e.email);
      console.log(e.password);
      // {userHandle}
      getUser(e);
    } catch (err: any) {
      console.log({err});

      if (err?.data?.errors) {
        console.log('errors', err?.data?.errors?.id);
      }
    }
  };

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
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../images/img_logo/logo.png')}
                  style={styles.logo}
                />
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  LOGIN
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 14, color: 'white'}}>Company Name</Text>
                <Text style={{fontSize: 22, color: 'white'}}>
                  {tenant?.name}
                </Text>
              </View>
            </View>
            <View style={{flex: 1.1}}>
              <View style={{flex: 4}}>
                <Text style={styles.textCn}>User name</Text>
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
                      keyboardType="email-address"
                    />
                  )}
                  name="email"
                />
                {errors.email && <Text>UserName is required.</Text>}
                {/* <TextInput
                  style={styles.inputSt}
                  onChangeText={text => setEmail(text)}></TextInput> */}
                <Text style={styles.textCn}>Password</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={styles.inputSt}
                    />
                  )}
                  name="password"
                />
                {errors.password && <Text>Password is required.</Text>}
                {/* <TextInput
                  style={styles.inputSt}
                  onChangeText={text => setPassword(text)}></TextInput> */}
                <AppButton
                  title={'LOGIN'}
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
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
    color: '#fff',
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
    fontSize: 16,
    alignSelf: 'flex-start',
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

export default UserLogin;
