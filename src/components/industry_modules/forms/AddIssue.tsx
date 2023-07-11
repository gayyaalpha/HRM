import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useGetAddNewIssueFormQuery} from '../api/industryApiSlice';
import useDidUpdate from '../../../app/hooks/useDidUpdate';
import {selectAddNewIssue, setAddNewIssue} from '../reducers/industrySlice';
import {AddNewIssue} from '../types/issueInfo';
import {convertJson} from '../../../app/utils/helpers';
import Form from '../../json_form/Form';
import data from '../../../../form.json';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../children/header';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import { useIssueSubmitMutation } from '../api/SubmitApiSlice';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AddIssue = ({navigation}: any) => {
  const dispatch = useDispatch();
  const addNewIssueForm: AddNewIssue = useSelector(selectAddNewIssue);

  const [submitHandle, {data: formData, isError, isLoading:loading, isSuccess :success }] =
  useIssueSubmitMutation();



  const {
    data: IssueFormData,
    error,
    isLoading,
    isSuccess,
  } = useGetAddNewIssueFormQuery('');
  console.log('isLoading ' + isLoading);

  console.log('isLoading ' + isSuccess);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  useEffect(() => {
    if (isError) console.log(error);
  }, [isError]);
  console.log(IssueFormData);

  useDidUpdate(() => {
    if (isSuccess) {
      console.log('set  data');

      setData();
    }
  }, [isSuccess]);

  const setData = () => {
    dispatch(setAddNewIssue(IssueFormData?.result));
  };

  console.log(addNewIssueForm);

  const onSubmit = (data:any) => {
   
      
    console.log( data);
    const convertedObject = Object.assign(
      {},
      ...data.map(({ name, value }:any) => ({ [name]: value }))
    );
    
    console.log(convertedObject);
    submitHandle(convertedObject)
  };



  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="ADD NEW ISSUE"
        onPress={() => {
          navigation.navigate('Issue Inspection');
        }}>
        <FontAIcon name="chevron-left" size={20} color="white" />
      </Header>
      <ScrollView style={styles.scrollContainer}>
        {addNewIssueForm && (
          <Form json={convertJson(addNewIssueForm?.json)} onSubmit={onSubmit} />
        )}
         {/* <Form json={data} onSubmit={onSubmit} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddIssue;

const styles = StyleSheet.create({
  scrollContainer: {
    width: screenWidth,
    flex: 1,
    // backgroundColor: '#08254D',

    // flex: 1,
  },
  container: {
    backgroundColor: '#08254D',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
