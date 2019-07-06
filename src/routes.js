import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/Signup';
import Products from './pages/Products';

const FadeTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity,
  });

  return { opacity: transition };
};

const BottomTransition = (index, position, height) => {
  console.tron.log('bunbun');
  const sceneRange = [index - 1, index, index + 1];
  const outputHeight = [height, 0, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight,
  });

  return {
    transform: [
      {
        translateY: transition,
      },
    ],
  };
};

const NavigationConfig = () => ({
  screenInterpolator: (sceneProps) => {
    const { position } = sceneProps;
    const { scene } = sceneProps;
    const { index } = scene;
    const height = sceneProps.layout.initHeight;

    // return FadeTransition(index, position);
    return BottomTransition(index, position, height);
  },
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      SignUp,
      Products,
    },
    {
      initialRouteName: 'Login',
      transitionConfig: NavigationConfig,
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
