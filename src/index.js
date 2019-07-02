import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import store from './store/index.js';

import Login from '~/components/Login';

console.tron.log('hey');

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
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
