import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Box from '../children/box';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import Header from '../children/header';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const HomeIn = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="HOME"
        onPress={() => {
          console.log("Home");
        }}>
        <FontAIcon name="navicon" size={20} color="white" />
      </Header>

      <View style={{height: 200, width: screenWidth}}>
        <View style={styles.boxContainer}>
          <Box
            title={'HRM'}
            onPress={() => navigation.navigate('HRM')}>
            <FontAIcon
              name="users"
              size={50}
              color="white"
              style={{margin: 20}}
            />
          </Box>
          <Box title={'INDUSTRY'} onPress={() => navigation.navigate('BPM')}>
            <Icon name="city" size={50} color="white" style={{margin: 20}} />
          </Box>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  boxContainer: {
    flex: 1,
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
    marginBottom: 30,
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
