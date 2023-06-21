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
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from './children/card';
import Box from './children/box';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import PresentageCircle from './children/presentageCircle';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            height: screenHeight * 1.5,
            width: screenWidth - 20,
          }}>
          <View style={{flex: 3}}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <PresentageCircle></PresentageCircle>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={[{marginRight: 70}, styles.leaveBox]}>
                <Text style={styles.leaveText}>Leave Balance</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                  }}>
                  <Text style={styles.leaveNum}>5/</Text>
                  <Text style={{color: 'white', paddingLeft: 5}}>7</Text>
                </View>
              </View>
              <View style={[{marginLeft: 70}, styles.leaveBox]}>
                <Text style={styles.leaveText}>Absent Days</Text>
                <Text style={styles.leaveNum}>3</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2}}>
            <Card
              title={'MISSING ATTENDANCE'}
              s1={'Missing\nAttendence'}
              s2={'Pending\nApproval'}
              s3={'Approved\nLeaves'}
              val1={3}
              val2={0}
              val3={0}></Card>
          </View>
          <View style={{flex: 2}}>
            <Card
              title={'OUT OF OFFICE'}
              s1={'Rejected'}
              s2={'Pending'}
              s3={'Approved'}
              val1={3}
              val2={0}
              val3={0}></Card>
          </View>
          <View style={{flex: 2}}>
            <Card
              title={'CLAIM'}
              s1={'Rejected'}
              s2={'Pending'}
              s3={'Approved'}
              val1={3}
              val2={0}
              val3={0}></Card>
          </View>
          <View style={{flex: 1.5, flexDirection: 'row'}}>
            <Box title={'PAYSLIPS'} onPress={()=>{navigation.navigate('Personal Info')}}>
              <FontAIcon name="newspaper-o" size={50} color="white" />
            </Box>
            <Box title={'SETTINGS'}>
              <Icon name="player-settings" size={50} color="white" />
            </Box>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
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
});
