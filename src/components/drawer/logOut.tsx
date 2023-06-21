import {Text, View} from 'react-native'
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/slice/authSlice';
import { useEffect } from 'react';

const LogOut=()=>{
    
    const dispatch = useDispatch();

    console.log('logout')


    useEffect(() => {
        // This function will be called when the component mounts
        dispatch(setToken(null));

      }, []); // Empty dependency array to run the effect only once on mount
    

    const clearToken = () => {
        
       
       
        
    
        // navigation.navigate('Home Screen')
      };
    





    return(
        <View>
            <Text>Log Out Screen </Text>
        </View>
    )
   

}

export default LogOut