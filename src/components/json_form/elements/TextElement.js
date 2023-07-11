// Imports
import React, {useState, useEffect} from 'react';
import {TextInput, View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../constants/colors';
import Styles from '../constants/styles';

import Icon from 'react-native-vector-icons/AntDesign';
import FontAIcon from 'react-native-vector-icons/FontAwesome5';

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Text inserted by user built with react native TextInput component
const TextElement = props => {
  // State that stores input text
  const [value, setValue] = useState('asdadas');

  // On first render send default value in answer data in the form component
  useEffect(() => {
    // Send data through the onChange prop
    props.onChange(props.pageIndex, props.index, '');
  }, []);

  // When text is inserted, state is changed and it updates answer data
  const inputHandler = enteredValue => {
    setValue(enteredValue);
    props.onChange(props.pageIndex, props.index, enteredValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <Text style={styles.title}>{props.title}</Text>
        {props.required && (
          <FontAIcon
            style={{padding: 5}}
            name="diaspora"
            size={8}
            color="white"
          />
        )}
        <Icon
          style={{padding: 5}}
          name="infocirlceo"
          size={16}
          color="#424242"
        />
      </View>
      <TextInput
        style={styles.input}
        multiline={false} // Allows to wrap content in multiple lines
        onChangeText={inputHandler}
        value={value}
        maxLength={40}
        defaultValue='1234ewre'
      />
      {false && (
        <View style={styles.errorView}>
          <Icon
            style={{paddingRight: 8}}
            name="exclamationcircle"
            size={12}
            color="#BC2F32"
          />

          <Text style={styles.error}>Error text</Text>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    // color: '#242424',
    color: 'white',
    fontFamily: 'segoeui',
  },
  error: {
    color: '#BC2F32',
    fontSize: 12,
    fontFamily: 'segoeui',
  },
  errorView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  labelView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  input: {
    fontFamily: 'segoeui',
    color: '#0F6CBD',
    backgroundColor: '#EBF3FC',
    textAlignVertical: 'center',
    fontSize: 12,
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.02,
    height: 44,
    ...Styles.shadow,
  },
});

export default TextElement;
