import { Dimensions } from 'react-native';
import styled from 'styled-components';
import LoginBG from '~/assets/images/login_bg.png';
import Logo from '~/assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  width: ${Dimensions.get('screen').width};
  height: ${Dimensions.get('screen').height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBG = styled.Image.attrs({
  source: LoginBG,
})`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImageLogo = styled.Image.attrs({
  source: Logo,
})`
  height: 72px;
  width: 72px;
  margin-bottom: 30px;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 30px;
  border: 1px solid #000;
`;
export const FormField = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 48px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  border: none;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background: #e5283e;
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
