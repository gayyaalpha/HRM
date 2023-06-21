import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = (props: any) => {
  return (
    <View style={styles.boxContainer}>
      <View style={{flex:1 ,  justifyContent:'flex-end',}}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={{flex:1 , justifyContent:'flex-start'}}>
        <Text style={styles.contentText}>{props.content}</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
    flex:1
  },
  boxContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
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
    fontWeight:'bold',
    color: 'white',
    fontSize: 15,
    alignContent: 'center',
  },
  contentText: {
    color: '#828282',
    fontSize: 16,
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
});
