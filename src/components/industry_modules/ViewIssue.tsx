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
import Header from '../children/header';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import CardIssue from '../children/cardIssue';
import CardButton from '../children/cardButton';
import {useDispatch, useSelector} from 'react-redux';
import {useGetFullIssueListQuery} from './api/industryApiSlice';
import useDidUpdate from '../../app/hooks/useDidUpdate';
import {selectAllIssueList, setAllIssues} from './reducers/industrySlice';
import {AllIssueList} from './types/issueInfo';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ViewIssue = ({ route,navigation}: any) => {

  const { id } = route.params;

  const allIssueList: AllIssueList = useSelector(selectAllIssueList);



  console.log(allIssueList);

  return (
    <SafeAreaView style={styles.container}>
      <View  style={{marginBottom: 30}}>
        <Header
          title="VIEW ISSUE"
          onPress={() => {
            navigation.navigate('Issue Reporter');
          }}>
          <FontAIcon name="chevron-left" size={20} color="white" />
        </Header>
      </View>
      <ScrollView>
      {allIssueList &&
            Object.values(allIssueList).map((ele: any) => ( 
              <View key={ele?.id}>
                <CardIssue
                  id={ele.id}
                  priority={ele.priority}
                  machine={ele.machine}
                  category={ele.category}
                  department={ele.department}
                  userName={ele.userName}
                  ></CardIssue>
              </View>
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewIssue;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    alignItems: 'center',
    flex: 1,
  },
  cardIssueContainer: {
    height: 150,
    marginBottom: 20,
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
