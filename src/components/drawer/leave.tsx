import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../children/card';
import CardLeave from '../children/cardLeave';
import Box from '../children/box';
import LeaveBox from '../children/leaveBox';

const Leave = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LEAVES</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={{flex: 1, marginBottom: 20}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <LeaveBox title={'Medical Leaves'} topNum={2} bottomNum={21}/>
            <LeaveBox title={'Casual Leaves'} topNum={5} bottomNum={7} />
          </View>
          <View style={{flex: 1.5, flexDirection: 'row'}}>
            <LeaveBox  title={'Short Leaves'} topNum={6} bottomNum={24}/>
            <LeaveBox  title={'Annual Leaves'} topNum={6} bottomNum={14}/>
          </View>
        </View>

        <View style={{flex: 2}}>
          <CardLeave
            title="APPROVALS"
            val1="3"
            s1="Pending Approval"
            val2="0"
            s2="Approved Requests"
            val3="0"
            s3="Rejected Requests"
          />
          <CardLeave
            title="LEAVES"
            val1="3"
            s1="Pending Approval"
            val2="0"
            s2="Approved Requests"
            val3="0"
            s3="Rejected Requests"
          />
          <CardLeave
            title="COVERING REQUEST"
            val1="3"
            s1="Pending Approval"
            val2="0"
            s2="Approved Requests"
          />
          <CardLeave
            title="VIEW LEAVE"
            val1="3"
            s1="Pending Approval"
            val2="0"
            s2="Approved Requests"
            val3="0"
            s3="Rejected Requests"
          />
          <CardLeave
            title="AUTO LEAVE DEDUCTION"
            val1="3"
            s1="Pending Approval"
          />
        </View>
        <View style={{flex: 1}}></View>
      </ScrollView>
    </View>
  );
};

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08254D',
  },
  header: {
    height: 50,
    backgroundColor: '#104682',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
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
