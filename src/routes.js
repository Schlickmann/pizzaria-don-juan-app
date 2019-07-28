import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import Login from './pages/Login';
import SignUp from './pages/Signup';
import Products from './pages/Products';
import ProductTypes from './pages/ProductTypes';

const SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });

  return {
    transform: [{ translateX }],
  };
};

const FadeTransition = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1],
  });
  const scaleY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1],
  });

  return { opacity, transform: [{ scaleY }] };
};

const SlideFromBottom = (index, position, height) => {
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
  transitionSpec: {
    duration: 1000,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const height = layout.initHeight;
    const width = layout.initWidth;
    const { index, route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'default';
    return {
      default: SlideFromRight(index, position, width),
      SlideFromBottom: SlideFromBottom(index, position, height),
      FadeTransition: FadeTransition(index, position),
    }[transition];
  },
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      SignUp,
      Products,
      ProductTypes,
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
