import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../children/header';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import Box from '../children/box';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Bpm = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Business Process Manager"
        onPress={() => {
          navigation.navigate('Home In');
        }}>
        <FontAIcon name="chevron-left" size={20} color="white" />
      </Header>

      <View style={{height: 100, width: screenWidth}}>
        <TouchableOpacity
          style={styles.whiteContainer}
          onPress={() => navigation.navigate('Issue Reporter')}>
          <View style={{flex: 1}}>
            <Text style={{color: '#3E3E3E', fontSize: 17}}>ISSUE REPORTER</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            <FontAIcon name="chevron-right" size={27} color="#5F5F5F" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Bpm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  whiteContainer: {
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
