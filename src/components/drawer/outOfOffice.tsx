import {ScrollView, StyleSheet, Text, View} from 'react-native';

// Import JSON file with the form
import data from './../../../form.json';
import Form from '../json_form/Form';
import {SafeAreaView} from 'react-native-safe-area-context';

const OutOfOffice = () => {
  const onSubmit = () => {
    console.log('data');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form json={data} onSubmit={onSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OutOfOffice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08254D',
   
    flex: 1,
  },
});
