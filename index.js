/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/store/store'
import { PersistGate } from 'redux-persist/integration/react';

const AppWrapper = () => {
  return (
    <Provider store={store}>
        <PersistGate  loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
