import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
  console.tron.log('ref preenchido');
}

export function navigate(routeName, params) {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}
