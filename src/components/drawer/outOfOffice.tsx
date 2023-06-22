import {ScrollView, Text, View} from 'react-native';

// Import JSON file with the form
import data from './../../../form.json';
import Form from '../../Form';

const OutOfOffice = () => {

    const onSubmit = () => {
        console.log("data");
    };
  return (
    <ScrollView>
      <Form json={data}  onSubmit={onSubmit} />
    </ScrollView>
  );
};

export default OutOfOffice;
