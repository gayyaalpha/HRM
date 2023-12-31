// Imports
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import Styles from '../constants/styles';

import FontAIcon from 'react-native-vector-icons/FontAwesome5';

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Date and time pickers built with the DateTimePicker
const DateTimePickerElement = props => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedDateTime, setSelectedDatetime] = useState('');

  // Initial answer data
  useEffect(() => {
    // If manual input selected in JSON
    if (props.type === 'manual')
      // Save empty string as default answer
      props.onChange(props.pageIndex, props.index, '');
    // If automatic input selected
    else {
      // Get current date
      var data = '';
      var date = new Date();

      // If date picker selected
      if (props.mode === 'date')
        // Send formated date (dd-mm-yyyy)
        data = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      // If time picker selected
      else if (props.mode === 'time')
        // Send formated time (hh:mm:ss)
        data = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      // Save answer data with onChange prop
      props.onChange(props.pageIndex, props.index, data);
    }
  }, []);

  // When a date or time is picked
  const onChange = (event, selectedDateTime) => {
    // Check if date/time was picked or popup dismissed
    if (event.type === 'set' || Platform.OS === 'ios') {
      var data = '';
      const currentDate = selectedDateTime || date;

      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      // If date picker selected
      if (props.mode === 'date')
        // Send formated date (dd-mm-yyyy)
        data = `${selectedDateTime.getDate()}-${
          selectedDateTime.getMonth() + 1
        }-${selectedDateTime.getFullYear()}`;
      // If time picker selected
      else if (props.mode === 'time')
        // Send formated time (hh:mm:ss)
        data = `${
          Platform.OS === 'ios'
            ? selectedDateTime.getUTCHours()
            : selectedDateTime.getHours()
        }:${selectedDateTime.getMinutes()}:${selectedDateTime.getSeconds()}`;

      setSelectedDatetime(selectedDateTime);
      // Save answer data with onChange prop
      props.onChange(props.pageIndex, props.index, data);
    } else setShow(false);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  // Set mode (date/time) depending on props.mode
  const showDateTimepicker = mode => {
    showMode(mode);
  };

  // For auto input nothing is rendered
  let content = <View></View>;

  let input = <View />;
  if (props.mode === 'date')
    selectedDateTime == ''
      ? (input = (
          <View style={styles.textContainer}>
            <Text style={styles.text}>Select a date...</Text>
          </View>
        ))
      : (input = (
          <View style={styles.textContainer}>
            <Text style={styles.textD}>
              {selectedDateTime.toString().length > 1
                ? selectedDateTime.getDate()
                : ''}
            </Text>
            <Text
              style={
                selectedDateTime !== ''
                  ? styles.separationText
                  : {
                      ...styles.separationText,
                      paddingHorizontal: windowWidth * 0.05,
                    }
              }>
              /
            </Text>
            <Text style={styles.textD}>
              {selectedDateTime.toString().length > 1
                ? selectedDateTime.getMonth() + 1
                : ''}
            </Text>
            <Text
              style={
                selectedDateTime !== ''
                  ? styles.separationText
                  : {
                      ...styles.separationText,
                      paddingHorizontal: windowWidth * 0.05,
                    }
              }>
              /
            </Text>
            <Text style={styles.textD}>
              {selectedDateTime.toString().length > 1
                ? selectedDateTime.getFullYear()
                : ''}
            </Text>
          </View>
        ));
  else
    input = (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {selectedDateTime.toString().length > 1
            ? Platform.OS === 'ios'
              ? selectedDateTime.getUTCHours()
              : selectedDateTime.getHours()
            : ''}
        </Text>
        <Text style={styles.separationText}>:</Text>
        <Text style={styles.text}>
          {selectedDateTime.toString().length > 1
            ? selectedDateTime.getMinutes()
            : ''}
        </Text>
      </View>
    );

  // For manual input render pickers
  if (props.type === 'manual')
    content = (
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
        </View>

        <TouchableOpacity style={styles.inputContainer} onPress={showDateTimepicker.bind(this, props.mode)}>
          {input}

          <View style={styles.button}>
            <Ionicons
              name={props.mode === 'date' ? 'ios-calendar' : 'md-time'}
              size={24}
              color='#0F6CBD'
            />
          </View>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );

  return <View>{content}</View>;
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingBottom: windowHeight * 0.02,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    paddingHorizontal: windowWidth * 0.02,
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontFamily: 'segoeui',
    color: 'white',
  },
  labelView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  text: {
    fontFamily: 'segoeui',
    fontSize: 14,
    color: Colors.secondary,
  },
  textD: {
    fontFamily: 'segoeui',
    fontSize: 14,
    color: '#0F6CBD',
  },
  separationText: {
    fontSize: 18,
    paddingHorizontal: windowWidth * 0.025,
    color: '#0F6CBD',
  },
  button: {
    paddingHorizontal: windowHeight * 0.01,
    paddingVertical: windowHeight * 0.01,
    backgroundColor: 'white',
  },
});

export default DateTimePickerElement;
