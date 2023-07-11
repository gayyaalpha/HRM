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
import CardSingleButton from '../children/cardSingleButton';
import CardButton from '../children/cardButton';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const IssueReporter = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="ISSUE REPORTER"
        onPress={() => {
          navigation.navigate('BPM');
        }}>
        <FontAIcon name="chevron-left" size={20} color="white" />
      </Header>
      <View style={{flex:1,width: screenWidth ,alignContent:'center'}} >
        <View style={{height:200}}>
          <CardSingleButton
            title={'ISSUE INSPECTION'}
            s1={'High\nPriority'}
            s2={'Medium\nPriority'}
            s3={'Low\nPriority'}
            val1={3}
            val2={0}
            val3={0}
            onPress={()=>navigation.navigate('Issue Inspection')}></CardSingleButton>
        </View>
        <View style={{height:200}}>
          <CardSingleButton
            title={'ISSUES REPORTED BY YOU'}
            s1={'Completed'}
            s2={'In Progress'}
            s3={'Not Started'}
            val1={3}
            val2={0}
            val3={0}></CardSingleButton>
        </View>
        <View >
          <CardButton onPress={()=>navigation.navigate('Add Issue')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IssueReporter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
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
