import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Alert} from 'react-native';

import TextElement from './elements/TextElement';
import RadioElement from './elements/RadioElement';
import DropdownElement from './elements/DropdownElement';
import CustomButton from './components/CustomButton';
import DateTimePickerElement from './elements/DateTimePickerElement';

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Form = props => {
  // Form elements array
  let form = [];
  // Answer data array
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [allAnswered, setAllAnswered] = useState(false);

  var coreElementFlag = false;

  let alldefined = 0;
  let notFilled = false;

  const onChange = (pageIndex, index, value) => {
    var temp = data;
    var element = props.json.pages[pageIndex].elements[index];
    temp[index] = {
      // type: element.type,
      name: element.name,
      value: value,
      // required:
      //   typeof element.required === 'undefined'
      //     ? false
      //     : element.required === true
      //     ? true
      //     : false,
    };

    if (typeof element.id !== 'undefined') temp[index]['id'] = element.id;

    setData(temp);

    alldefined = 0;
    notFilled = false;
    data.map(d => {
      alldefined++;
      if (d.required === true && d.value.length === 0) notFilled = true;
    });

    if (props.json.pages[pageIndex].elements.length === alldefined) {
      if (notFilled === false) {
        if (props.showSubmitButton === false && coreElementFlag === false)
          if (submitted === false) onSubmit();
        setAllAnswered(true);
      }
    }
  };

  const onSubmit = () => {
    if (props.showSubmitButton !== false || coreElementFlag === true) {
      if (allAnswered) props.onSubmit(data);
      else Alert.alert('ERROR', 'All the survey fields must be answered.');
    } else {
      props.onSubmit(data);
      setSubmitted(true);
    }
  };
  const onCancel = () => {
    console.log("cancel")
  };


  props.json.pages.map((page, pageIndex) => {
    page.elements.map((e, index) => {
      if (e.type === 'text') {
        coreElementFlag = true;
        form.push(
          <TextElement
            key={index}
            onChange={onChange}
            index={index}
            pageIndex={pageIndex}
            title={e.title}
            required={e.isRequired}
          />,
        );
      } else if (e.type === 'radiogroup') {
        coreElementFlag = true;
        form.push(
          <RadioElement
            key={index}
            onChange={onChange}
            index={index}
            pageIndex={pageIndex}
            title={e.title}
            items={e.choices}
            required={e.isRequired}
          />,
        );
      } else if (e.type === 'dropdown') {
        coreElementFlag = true;
        form.push(
          <DropdownElement
            key={index}
            onChange={onChange}
            index={index}
            pageIndex={pageIndex}
            title={e.title}
            items={e.choices}
            required={e.isRequired}
            endPoint={e.EndPoint}
          />,
        );
      } else if (e.type === 'datepicker') {
        if (e.mode === 'manual') coreElementFlag = true;
        form.push(
          <DateTimePickerElement
            key={index}
            onChange={onChange}
            index={index}
            pageIndex={pageIndex}
            title={e.title}
            mode={'date'}
            type={e.mode}
            required={e.isRequired}
          />,
        );
      }
    });
  });

  var submitButton = (
    <CustomButton
      title={
        typeof props.submitText !== 'undefined'
          ? typeof props.submitText === 'string'
            ? props.submitText
            : 'Save'
          : 'Save'
      }
      onPress={onSubmit}
      backgroundColor={'#00A3FF'}
      textColor={'white'}
      width={'100%'}
      height={50}
      borderRadius={(windowWidth + windowHeight) * 0.001}
    />
  );
  var cancelButton = (
    <CustomButton
      title={
        typeof props.submitText !== 'undefined'
          ? typeof props.submitText === 'string'
            ? props.submitText
            : 'Cancel'
          : 'Cancel'
      }
      onPress={onCancel}
      backgroundColor={'white'}
      textColor={'black'}
      width={'100%'}
      height={50}
      borderRadius={(windowWidth + windowHeight) * 0.001}
    />
  );
  //<Button title='Submit' onPress={onSubmit}/>;
  if (props.showSubmitButton === false && coreElementFlag === false)
    submitButton = <View />;

  return (
    <View style={styles.container}>
      {form}
      <View style={{flex:1 , flexDirection:'row'}}>
        <View  style={{flex:1 , padding:20}}>{submitButton}</View>
        <View style={{flex:1 , padding:20}}>{cancelButton}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.get('window').width * 0.03,
    paddingVertical: Dimensions.get('window').height * 0.03,
  },
});

export default Form;
