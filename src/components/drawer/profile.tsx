import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Box from '../children/box';
import Icon from 'react-native-vector-icons/Fontisto';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity
            style={{flex: 1, padding: 10}}
            onPress={() => navigation.toggleDrawer()}>
            <FontAIcon name="navicon" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={styles.headerTextSt}>
          <Text style={styles.headerText}>PROFILE</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>

      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            height: screenHeight * 1.5,
            width: screenWidth - 30,
          }}>
          <View style={{flex: 3}}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={styles.profileImage}
                source={require('../../images/img/check.png')}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 24}}>
                PHILIP MACCKKIINY
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>
                Software Engineer
              </Text>
            </View>
          </View>
          <View style={styles.boxContainer}>
            <Box
              title={'PERSONAL\nINFORMATION'}
              onPress={() => navigation.navigate('Personal Info')}>
              <Icon name="person" size={50} color="white"  style={{margin:20}} />
            </Box>
            <Box
              title={'CONTACT\nDETAILS'}
              onPress={() => navigation.navigate('Contact Details')}>
              <FontAIcon name="phone" size={50} color="white"  style={{margin:20}}  />
            </Box>
          </View>
          <View style={styles.boxContainer}>
            <Box
              title={'JOB DETAIL'}
              onPress={() => navigation.navigate('Job Details')}>
              <FontAIcon name="info-circle" size={50} color="white"  style={{margin:20}}  />
            </Box>
            <Box
              title={'QUALIFICATIONS'}
              onPress={() => navigation.navigate('Qualifications')}>
              <FontAIcon name="certificate" size={50} color="white"  style={{margin:20}} />
            </Box>
          </View>
          <View style={styles.boxContainer}>
            <Box
              title={'BANK DETAILS'}
              onPress={() => navigation.navigate('Bank Details')}>
              <FontAIcon name="bank" size={50} color="white" style={{margin:20}}  />
            </Box>
            <Box
              title={'WORK HISTORY'}
              onPress={() => navigation.navigate('Work History')}>
              <FontAIcon name="briefcase" size={50} color="white"  style={{margin:20}} />
            </Box>
          </View>
          <View style={styles.boxContainer}>
            <Box
              title={'DOCUMENT\nLIBRARY'}
              onPress={() => navigation.navigate('Document Library')}>
              <FontAIcon name="sticky-note" size={50} color="white" style={{margin:20}} />
            </Box>
            <Box
              title={'BENEFIT DETAILS'}
              onPress={() => navigation.navigate('Benefit Details')}>
              <FontAIcon name="signal" size={50} color="white" style={{margin:20}} />
            </Box>
          </View>
          <View style={styles.boxContainer}>
            <Box
              title={'PAYSLIPS'}
              onPress={() => navigation.navigate('Payslips')}>
              <FontAIcon name="newspaper-o" size={50} color="white" style={{margin:20}}/>
            </Box>
            <Box
              title={'SETTINGS'}
              onPress={() => navigation.navigate('Settings')}>
              <Icon name="player-settings" size={50} color="white" style={{margin:20}} />
            </Box>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default Profile;
