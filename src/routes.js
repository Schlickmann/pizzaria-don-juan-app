import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Products from './pages/Products';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Products,
  }),
);

export default Routes;
