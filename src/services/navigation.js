import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
  console.tron.log('ref preenchido');
}

export function navigate(routeName, params) {
  console.tron.log('dispatch');
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}
