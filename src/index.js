import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import store from './store/index.js';

import Routes from './routes';

console.tron.log('hey');

const App = () => (
  <>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </>
);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
// text: {
//   ...Platform.select({
//     ios: {
//       color: "#c5c"
//     },
//     android: {
//       fontSize: 24
//     }
//   })
// }
// });
