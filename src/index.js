import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import store from './store/index.js';

import Routes from './routes';
import { setNavigator } from '~/services/navigation';

const App = () => (
  <>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  </>
);

export default App;
