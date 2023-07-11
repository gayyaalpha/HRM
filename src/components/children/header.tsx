import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('window').width;

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <TouchableOpacity
          style={{flex: 1, padding: 10}}
          onPress={props.onPress}>
          {props.children}
        </TouchableOpacity>
      </View>
      <View style={styles.headerTextSt}>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: screenWidth,
    backgroundColor: '#104682',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
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
