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
  height: 64px;
  width: 64px;
  margin-bottom: 25px;
`;

export const FormContainer = styled.View`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 30px;
`;
export const FormField = styled.TextInput`
  height: 40px;
  margin-bottom: 10px;
  background: #fff;
  border: none;
  border-radius: 8px;
  padding-left: 15px;
`;
