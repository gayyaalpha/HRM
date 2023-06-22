import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Alert } from 'react-native';


import TextElement from './components/elements/TextElement';

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
        temp[index] = {type: element.type, name: element.name, value: value, required: typeof element.required === 'undefined' ? false : element.required === true ? true : false};
        
        if (typeof element.id !== 'undefined')
            temp[index]['id'] = element.id;
        
        setData(temp);

        alldefined = 0;
        notFilled = false;
        data.map((d) => {
            alldefined++;
            if (d.required === true && d.value.length === 0)
                notFilled = true;
        });

        if (props.json.pages[pageIndex].elements.length === alldefined) {
            if (notFilled === false) {
                if (props.showSubmitButton === false  && coreElementFlag === false)
                    if (submitted === false)
                        onSubmit();
                setAllAnswered(true);
            }
        }
    };

    const onSubmit = () => {
        if (props.showSubmitButton !== false || coreElementFlag === true) {
            if (allAnswered) props.onSubmit(data);
            else Alert.alert('ERROR', 'All the survey fields must be answered.');
        }
        else {
            props.onSubmit(data);
            setSubmitted(true);
        }
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
                        title={e.name} 
                    />
                );
            }

        });
    });

    var submitButton = (
        <CustomButton
            title={typeof props.submitText !== 'undefined' ? typeof props.submitText === 'string' ? props.submitText : 'Submit' : 'Submit'}
            onPress={onSubmit}
            backgroundColor={Colors.primary}
            textColor={'white'}
            width={'100%'}
            height={windowHeight * 0.1}
            borderRadius={(windowWidth+windowHeight)*0.01}
            shadow={true}
            bold={true}
        />
    );
//<Button title='Submit' onPress={onSubmit}/>;
    if(props.showSubmitButton === false && coreElementFlag === false) submitButton = <View/>;

    return (
        <View style={styles.container}>
            {form}
            {submitButton}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.get('window').width * 0.03,
        paddingVertical: Dimensions.get('window').height * 0.03
    }
});

export default Form;