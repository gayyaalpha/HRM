// Imports
import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

import Colors from "../constants/colors";

// Window width and height used for styling purposes
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Radio choice inserted by user built with react native Icon and TouchableOpacity component
const RadioElement = props => {

    // State that stores radio input
    const [value, setValue] = useState(false);

    // On first render send default value in answer data in the form component
    useEffect(() => {
        props.onChange(props.pageIndex, props.index, "");
    }, []);

    // When radio input is inserted, state is changed and it updates answer data
    const radioHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.pageIndex, props.index, enteredValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.items.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.radioContainer} onPress={() => radioHandler(item)}>
                        <Icon style={{color:'#0F6CBD'}} name={item === value ? "ios-radio-button-on" : "ios-radio-button-off"} size={24} />
                        <Text style={styles.itemTitle}> {item.text}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
};

// Styles
const styles = StyleSheet.create({
    container: {
        paddingBottom: windowHeight * 0.02
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily:'segoeui',
        color:'white',
    },
    itemTitle: {
        fontSize: 14,
        fontFamily:'segoeui',
        color:'white',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default RadioElement;