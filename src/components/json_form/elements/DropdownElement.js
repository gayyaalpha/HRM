// Imports
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAIcon from 'react-native-vector-icons/FontAwesome5';
import {useGetJsonUrlQuery} from '../api/jsonApiSlice';
import useDidUpdate from '../../../app/hooks/useDidUpdate';
import {setProductionLine, selectProductionLine} from '../reducers/jsonSlice';
import {useDispatch, useSelector} from 'react-redux';

// Dropdown element built from picker
const DropdownElement = props => {
  const dispatch = useDispatch();
  const productionLine = useSelector(selectProductionLine);

  const {
    data: dropdownData,
    error,
    isLoading,
    isSuccess,
  } = useGetJsonUrlQuery(props.endPoint);

  console.log(props.endPoint);

  console.log('isLoading ' + isLoading);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  console.log(dropdownData);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set  data');

      setData();
    }
  }, [isSuccess]);

  const setData = () => {
    dispatch(setProductionLine(dropdownData?.result));
  };
  // console.log(productionLine);

  // State to store selected option

  const [value, setValue] = useState('');

  // Sends default answer data
  useEffect(() => {
    props.onChange(props.pageIndex, props.index, '');
  }, []);

  // On picker option change
  const pickerHandler = enteredValue => {
    // Set state with new option
    setValue(enteredValue);
    // Send new option as new answer
    props.onChange(props.pageIndex, props.index, enteredValue);
  };

  return (
    <View style={{paddingBottom: 20}}>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      <View style={styles.labelView}>
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
      </View>
      <View style={styles.container}>
        <Picker
          mode="dialog"
          style={styles.containerPicker}
          dropdownIconColor="#616161"
          selectedValue={value}
          onValueChange={pickerHandler}
          prompt={props.title}>
          <Picker.Item
            label={props.title}
            style={{fontSize: 14, fontFamily: 'segoeui', color: '#707070'}}
            value={''}
          />
          {dropdownData && Object.values(dropdownData?.result).map((item, index) => {
            return (
              <Picker.Item
                style={{fontSize: 14, fontFamily: 'segoeui', color: '#fff'}}
                label={item.name == null ? item.userName : item.name}
                value={item.id}
                key={index}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  labelView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  containerPicker: {
    backgroundColor: '#fff',
    color: '#0F6CBD',
    fontFamily: 'segoeui',
  },
  container: {
    borderBottomColor: '#0F6CBD',
    borderBottomWidth: 4,
    borderWidth: 1,
    borderColor: '#707070', // Change the border color here
    borderRadius: 8,
    overflow: 'hidden', // Optional: Hide any overflow
  },
  title: {
    fontSize: 16,
    fontFamily: 'segoeui',
    color: 'white',
  },
});

export default DropdownElement;
